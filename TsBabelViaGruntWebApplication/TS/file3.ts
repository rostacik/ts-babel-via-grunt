module someModule3 {
    export async function test(): Promise<void> {
        let ob = new someModule.someClass();
        let res = await ob.getConfirmAsync('hey!!!!');

        alert(res);
    }
}