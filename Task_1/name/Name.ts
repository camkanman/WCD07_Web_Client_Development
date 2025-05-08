export class NameUtils {
    constructor(public inputName: string) {}

    getInitialNameUppercase(): string {
        const initials = this.inputName.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
        return initials;
    }
}