export const SORT_BY = {
    ASC: { name: "ASC", compare: function( a, b ) { return a.timestamp - b.timestamp; } },
    DESC: { name: "DESC", compare: function( a, b ) { return b.timestamp - a.timestamp; } },
}