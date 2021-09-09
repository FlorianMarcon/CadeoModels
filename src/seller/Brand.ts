import { IStore } from "./Store";

export enum BrandStatus {
    AVAILABLE = "AVAILABLE",
    SOON_AVAILABLE = "SOON_AVAILABLE",
    NOT_AVAILABLE = "NOT_AVAILABLE"
}

/**
 * Interface representing brand informations
 */
export default interface IBrand  {

    _id     :    number; /** Id of the brand */

    name    :   string; /** Name of the brand */

    description?:    string; /** Description of the brand. Can be undefined */

    theme?  :   any; /** Brand theme */

    domain? :   string; /** Brand domain */

    image?  :   string;
    
    status  :   BrandStatus; /** Status of the brand */

    /** FIELD RESOLVERS */
    stores  :   Array<IStore>; /** Stores linked with the brand */
}

/**
 * Interface used to create a brand
 */
export interface IBrandCreate {

    name            :   string; /** Name of the brand */

    description?    :    string; /** Description of the brand. Can be null */

    domain? :   string; /** Brand domain */
}

/**
 * Interface used to update a brand
 */
export interface IBrandUpdate {

    _id             :   number; /** Id of the brand to update */

    name?           :   string; /** Name of the brand */

    description?    :    string | null; /** Description of the brand. Can be null */

    theme?  :   any; /** Brand theme */

    domain? :   string; /** Brand domain */
 
    status?         :   BrandStatus; /** Status of the brand */
}