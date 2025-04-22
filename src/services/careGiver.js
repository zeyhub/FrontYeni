import SERVICE_URLS from "../constants/service_urls";

const CaregiverService = {
  // Yeni bireysel bakıcı kaydı oluşturur
  async register(fullName, email, phone, password, district, neighborhood) {
    const response = await fetch(SERVICE_URLS.AUTH_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
        district,       
        neighborhood,    
        role: "caregiver",
      }),
    });

    if (!response.ok) {
      throw new Error("Bireysel bakıcı kaydı başarısız.");
    }

    return await response.json();
  },

  // ID ile getir
  async getById(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/caregiver/${id}`);

    if (!response.ok) {
      throw new Error("Bireysel bakıcı bilgisi alınamadı.");
    }

    return await response.json();
  },

  // Güncelleme
  async update(id, updatedData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/caregiver/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Bireysel bakıcı bilgisi güncellenemedi.");
    }

    return await response.json();
  },

  //  Silme
  async delete(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/caregiver/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Bireysel bakıcı silinemedi.");
    }

    return await response.json();
  },
};

export default CaregiverService;