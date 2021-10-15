import { CardFidelity } from "../..";
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

    categories?:    Array<string>; /** Brand categories */

    theme?  :   any; /** Brand theme */

    domain? :   string; /** Brand domain */

    image?  :   string;
    
    status  :   BrandStatus; /** Status of the brand */

    madeFidelity    :   boolean;
    madeGift        :   boolean;

    /** FIELD RESOLVERS */
    stores  :   Array<IStore>; /** Stores linked with the brand */
    fidelityCards   :   Array<CardFidelity>;
}

/**
 * Interface used to create a brand
 */
export interface IBrandCreate {

    name            :   string; /** Name of the brand */

    description?    :    string; /** Description of the brand. Can be null */

    categories?:    Array<string>; /** Brand categories */

    domain? :   string; /** Brand domain */

    madeFidelity?    :   boolean;
    madeGift?        :   boolean;
}

/**
 * Interface used to update a brand
 */
export interface IBrandUpdate {

    _id             :   number; /** Id of the brand to update */

    name?           :   string; /** Name of the brand */

    description?    :    string | null; /** Description of the brand. Can be null */

    categories?:    Array<string>; /** Brand categories */

    theme?  :   any; /** Brand theme */

    domain? :   string; /** Brand domain */
 
    status?         :   BrandStatus; /** Status of the brand */

    madeFidelity?    :   boolean;
    madeGift?        :   boolean;
}

export interface IBrandsFilters {
    categories?:    Array<string>; /** Brand categories */
}