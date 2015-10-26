class <%= lodash.capitalize(componentName) %>Model {

    constructor(public userName: string,
                public action: string,
                public date: Date) {
    }

    static fromJSON(json: any) {
        return new <%= lodash.capitalize(componentName) %>Model(
            json.userName,
            json.action,
            new Date(json.date)
        );
    }
}

export = <%= lodash.capitalize(componentName) %>Model;
