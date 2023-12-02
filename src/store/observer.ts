/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export type Subject<T> = {
    attach(observer: Observer<T>): void;
    detach(observer: Observer<T>): void;
    notify(): void;
    data: T[];
    observers: Observer<T>[];
};
export type Product = {
    name: string;
    price: number;
};
/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export const ProductSubject: Subject<Product> = {
    attach: function (observer: Observer<Product>): void {
        this.observers.push(observer);
    },
    detach: function (observer: Observer<Product>): void {
        this.observers.slice(observer);
    },
    notify: function (): void {
        this.observers.forEach((obs) => {
            console.log(this.data);
            obs.update(this);
        });
    },
    data: [],
    observers: [],
};
/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface Observer<T> {
    state: T[];
    // Receive update from subject.
    update(subject: Subject<T>): T[];
}
