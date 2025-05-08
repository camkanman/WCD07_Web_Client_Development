type NameUtils = {
    inputName: string;
    getInitialNameUppercase: () => string;
};

export const createNameUtils = (inputName: string): NameUtils => {
    return {
        inputName,
        getInitialNameUppercase: () => {
            const initials = inputName.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
            return initials;
        }
    };
};