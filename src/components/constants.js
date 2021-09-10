export const SORT_BY = {
    ASC: { name: "ASC", compare: function( a, b ) { return a.nota - b.nota; } },
    DESC: { name: "DESC", compare: function( a, b ) { return b.nota - a.nota; } },
}