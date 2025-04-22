import SERVICE_URLS from "../constants/service_urls";

const PetService = {
  //  Yeni evcil hayvan ekle
  async create(petData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petData),
    });

    if (!response.ok) {
      throw new Error("Evcil hayvan eklenemedi.");
    }

    return await response.json();
  },

  //  ID ile pet getir
  async getById(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/pets/${id}`);

    if (!response.ok) {
      throw new Error("Evcil hayvan bilgisi alınamadı.");
    }

    return await response.json();
  },

  // Kullanıcıya ait tüm pet'leri getir
  async getByOwner(ownerId) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/pets/owner/${ownerId}`);

    if (!response.ok) {
      throw new Error("Evcil hayvanlar getirilemedi.");
    }

    return await response.json();
  },

  // Güncelle
  async update(id, updatedData) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/pets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Evcil hayvan bilgisi güncellenemedi.");
    }

    return await response.json();
  },

  //  Sil
  async delete(id) {
    const response = await fetch(`${SERVICE_URLS.BASE_URL}/pets/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Evcil hayvan silinemedi.");
    }

    return await response.json();
  },
};

export default PetService;
    // create pet 
    // get pets

    // get pet by id
    // update pet by id
    // delete pet by id


