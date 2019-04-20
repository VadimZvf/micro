class EventBus {
    events = {
        // all events will be defined here
        // may be we should declare typings for events payload
        FIRST_EVENT: []
    };

    subscribe(eventType, listener) {
        if (!this.events[eventType]) {
            throw new Error(`Cannot subscribe events with type: ${eventType}`);
        }

        const listenerIndex = this.events[eventType].push(listener) - 1;

        return {
            remove: () => {
                const eventListeners = this.events[eventType];

                this.events[eventType] = eventListeners.slice(listenerIndex, 1);
            }
        };
    }

    publish(eventType, data) {
        if (!this.events[eventType] || !this.events[eventType].length) {
            throw new Error(`No listeners for event type: ${eventType}`);
        }

        this.events[eventType].forEach(listener => {
            try {
                listener(data);
            } catch (e) {
                throw new Error(`Has error in listener with event type: ${eventType}`);
            }
        });
    }
}

window.__EVENT_BUS__ = new EventBus();
