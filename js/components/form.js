class Form {
    /**
     * Cria uma instância da classe de formulário.
     *
     * @constructor
     * @param {string} id - ID do formulário.
     * @param {string[]} fields - IDs dos campos do formulário.
     */
    constructor(id, fields) {
        this.id = id;
        this.fields = fields
    }


    /**
     * Busca os valores dos campos do formulário.
     *
     * @returns {Object} Um objeto com os valores do formulário.
     */
    getValues() {
        const values = {};

        for (const field of this.fields) {
            const element = document.getElementById(field);
            values[field] = element?.value;
        }

        return values;
    }
}
