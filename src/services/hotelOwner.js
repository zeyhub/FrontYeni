import SERVICE_URLS from "../constants/service_urls";

const HotelOwnerService = {
  //  Yeni otel sahibi kaydı oluşturur
  async register(fullName, email, phone, password, otelName, district, neighborhood, businessLicense) {
    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("otelName", otelName);            
    formData.append("district", district);            
    formData.append("neighborhood", neighborhood);    
    formData.append("role", "hotel_owner");

    formData.append("businessLicense", {
      uri: businessLicense.uri,
      name: businessLicense.name,
      type: businessLicense.type,
    });

    const response = await fetch(SERVICE_URLS.AUTH_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Otel sahibi kaydı başarısız.");
    }

    return await response.json();
  },

  //  ID ile otel sahibi getir
  async getById(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/hotel-owner/${id}`);

    if (!response.ok) {
      throw new Error("Otel sahibi bilgisi alınamadı.");
    }

    return await response.json();
  },

  //  Güncelleme
  async update(id, updatedData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/hotel-owner/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Otel sahibi bilgisi güncellenemedi.");
    }

    return await response.json();
  },

  //  Silme
  async delete(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/hotel-owner/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Otel sahibi silinemedi.");
    }

    return await response.json();
  },
};

export default HotelOwnerService;
   
    // login
    // register

    // /:id get
    // /:id put
    // /:id delete
