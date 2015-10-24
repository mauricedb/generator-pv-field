class <%= lodash.capitalize(componentName) %>Model {

    constructor(public code: string,
                public description: string) {
    }

    static fromJSON(json: any) {
        return new <%= lodash.capitalize(componentName) %>Model(
            json.code,
            json.description
        );
    }
}

export = <%= lodash.capitalize(componentName) %>Model;
