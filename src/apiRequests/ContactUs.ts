import { ApiResponse, post } from "@/lib/apiClient";
import { ContactRequest } from "@/types/ContactUs";


export const postContacts = async (
  contact: ContactRequest
): Promise<ApiResponse<null>> => {
  const response = await post<ApiResponse<null>, ContactRequest>(
    "/contacts",
    contact
  );
  return response.data;
};
