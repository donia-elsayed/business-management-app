export const useEntityEditing = ({ setEntities, entityType }) => {
  const updateEntity = (id, updatedFields) => {
    setEntities((prevEntities) => {
      const updatedEntities = prevEntities.map((entity) =>
        entity.id === id ? { ...entity, ...updatedFields } : entity
      );

      localStorage.setItem(entityType, JSON.stringify(updatedEntities));
      return updatedEntities;
    });
  };

  return { updateEntity };
};
