import SERVICE_URLS from "../constants/service_urls";

const GroomerService = {
  //  Yeni groomer (pet kuaförü) kaydı oluşturur
  async register(fullName, email, phone, password, shopName, district, neighborhood, businessLicense) {
    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("shopName", shopName);
    formData.append("district", district);         
    formData.append("neighborhood", neighborhood);
    formData.append("role", "groomer");

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
      throw new Error("Groomer kaydı başarısız.");
    }

    return await response.json();
  },

  //  Groomer'ı ID ile getir
  async getById(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/groomer/${id}`);

    if (!response.ok) {
      throw new Error("Groomer bilgisi alınamadı.");
    }

    return await response.json();
  },

  //  Groomer bilgilerini güncelle
  async update(id, updatedData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/groomer/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Groomer bilgisi güncellenemedi.");
    }

    return await response.json();
  },

  // Groomer kaydını sil
  async delete(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/groomer/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Groomer silinemedi.");
    }

    return await response.json();
  },
};

export default GroomerService;
   
    // login
    // register

    // /:id get
    // /:id put
    // /:id delete
