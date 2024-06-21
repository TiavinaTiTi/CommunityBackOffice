export interface PageableModel {
  // Numero de page
  pageNumber: number,
  // Nombre d'elements dans une page
  pageSize: number,
  // Totale nombre elements dans dataSet
  totalElements: number,
  // Totale nombre de page dans dataSet
  totalPages: number
}
