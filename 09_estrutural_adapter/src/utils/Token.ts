export default class Token {
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRyZWluYW1lbnRvIFR5cGVjcmlwdCIsImlhdCI6MTUxNjIzOTAyMn0.PfZoxLqGcM3ikOEcPf1puUvMMTboWFCuV1YXWTe4a_c";

    getToken(): string {
        return this.token;
    }
}