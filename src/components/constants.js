export const SORT_TYPE = {
    ASC: { name: "ASC", compare: function( a, b ) { return a.nota - b.nota; } },
    DESC: { name: "DESC", compare: function( a, b ) { return b.nota - a.nota; } },
}

export const VOTE_TYPE = {
    LIKE: { value: "positivo" },
    DISLIKE: { value: "negativo" },
}