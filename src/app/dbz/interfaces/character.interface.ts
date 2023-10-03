
//Por ejemplo, aqui cuando aumentamos la propiedad de ID, toda nuestra aplicacion fallo debido a que en los otros componentes, servicios, etc, estabamos utilizando los objetos de tipo Character con dos atributos, y al aumentarle uno mas, todas estas referencias estan requiriendo aumentar el otro atributo faltante.

//Entonces para evitarnos refactorizar todas estas referencias, por motivo de no demorarnos en esto por el curso, le pusimos como atributo opcional. Pero en la realidad es necesario refactorizar todo, si es un atributo tan importante como el ID.
export interface Character {
  id?: string;
  name: string;
  power: number;
}
