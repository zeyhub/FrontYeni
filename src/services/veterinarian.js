import SERVICE_URLS from "../constants/service_urls";

const VeterinarianService = {
  //  Veteriner kaydı (form-data ile, dosya yüklemeli)
  async register({
    fullName,
    email,
    phone,
    password,
    clinicName,
    district,
    neighborhood,
    taxDocument, // Dosya (vergi levhası)
  }) {
    const formData = new FormData();

    // Text veriler ekleniyor
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("clinicName", clinicName);
    formData.append("district", district);
    formData.append("neighborhood", neighborhood);
    formData.append("role", "veterinarian");

    //  Dosya (vergi levhası) ekleniyor
    formData.append("taxDocument", {
      uri: taxDocument.uri,
      name: taxDocument.name || "vergi_levhasi.jpg",
      type: taxDocument.type || "image/jpeg",
    });

    const response = await fetch(SERVICE_URLS.AUTH_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data", // ⬅️ çünkü dosya var
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error("Veteriner kaydı başarısız: " + error);
    }

    return await response.json();
  },

  //  ID ile veteriner getir
  async getById(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/veterinarian/${id}`);

    if (!response.ok) {
      throw new Error("Veteriner bilgisi alınamadı.");
    }

    return await response.json();
  },

  // Veteriner bilgisi güncelleme
  async update(id, updatedData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/veterinarian/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Veteriner bilgisi güncellenemedi.");
    }

    return await response.json();
  },

  //  Veteriner silme
  async delete(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/veterinarian/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Veteriner silinemedi.");
    }

    return await response.json();
  },
};

export default VeterinarianService;


    // login
    // register

    // /:id get
    // /:id put
    // /:id delete
