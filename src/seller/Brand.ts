/**
 * Interface representing brand informations
 */
export default interface IBrand  {

    _id     :    number; /** Id of the brand */

    name    :   string; /** Name of the brand */

    description?:    string; /** Description of the brand. Can be undefined */
}

/**
 * Interface used to create a brand
 */
export interface IBrandCreate {

    name            :   string; /** Name of the brand */

    description?    :    string; /** Description of the brand. Can be null */
}