module someModule {
    declare var RSVP: any;

    export class someClass {
        public async callSomeAsync(): Promise<void> {
            let res: boolean = await this.getConfirmAsync("yes/no");

            console.log(res);
        }

        public async getConfirmAsync(message: string): Promise<boolean> {
            var promise = new RSVP.Promise(function (resolve: (value: boolean) => void, reject: (reason: boolean) => void) {
                let res: boolean = confirm(message);

                resolve(res);
            });

            return promise;
        }
    }
}