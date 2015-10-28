class <%= componentNamePC %>Model {
    constructor(public userName: string,
                public action: string,
                public date: Date) {
    }

    static fromJSON(json: any) {
        return new <%= componentNamePC %>Model(
            json.userName,
            json.action,
            new Date(json.date)
        );
    }
}

export = <%= componentNamePC %>Model;
