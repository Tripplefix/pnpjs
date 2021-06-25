import { Queryable2 } from "@pnp/queryable";

export function Agent(agent: any): (instance: Queryable2) => Queryable2 {

    return (instance: Queryable2) => {

        instance.on.pre(async (url, init, result) => {

            // we add the proxy to the request
            (<any>init).agent = agent;

            return [url, init, result];
        });

        return instance;
    };
}
