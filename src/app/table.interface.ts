export interface Table {
    id: number;
    deductible: number;
    created_at: string | Date;
    insurance_sum: number;
    is_approval_required: boolean;
    is_preliminary_allowed: string;
    no_offer: boolean;
    premium: number;
}