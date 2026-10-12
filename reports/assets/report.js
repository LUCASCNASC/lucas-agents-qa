(() => {
  const search = document.querySelector("[data-report-search]");
  const priorityFilter = document.querySelector("[data-filter-priority]");
  const statusFilter = document.querySelector("[data-filter-status]");
  const items = [...document.querySelectorAll("[data-report-item]")];
  const sections = [...document.querySelectorAll("[data-report-section]")];
  const count = document.querySelector("[data-result-count]");
  const details = [...document.querySelectorAll("details")];

  const normalize = (value) =>
    (value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .trim();

  const applyFilters = () => {
    const query = normalize(search?.value);
    const priority = priorityFilter?.value || "all";
    const status = statusFilter?.value || "all";
    let visible = 0;

    for (const item of items) {
      const matchesText = !query || normalize(item.textContent).includes(query);
      const itemPriority = normalize(item.dataset.priority || "none");
      const itemStatus = normalize(item.dataset.status || "none");
      const matchesPriority =
        priority === "all" || itemPriority === normalize(priority);
      const matchesStatus = status === "all" || itemStatus === normalize(status);
      const show = matchesText && matchesPriority && matchesStatus;

      item.hidden = !show;
      if (show) visible += 1;
    }

    for (const section of sections) {
      const sectionItems = [...section.querySelectorAll("[data-report-item]")];
      section.hidden =
        sectionItems.length > 0 &&
        !sectionItems.some((item) => !item.hidden);
    }

    if (count) {
      count.textContent = `${visible} de ${items.length} itens visíveis`;
    }
  };

  search?.addEventListener("input", applyFilters);
  priorityFilter?.addEventListener("change", applyFilters);
  statusFilter?.addEventListener("change", applyFilters);

  document.querySelector("[data-expand-all]")?.addEventListener("click", () => {
    details.forEach((item) => {
      if (!item.closest("[hidden]")) item.open = true;
    });
  });

  document.querySelector("[data-collapse-all]")?.addEventListener("click", () => {
    details.forEach((item) => {
      item.open = false;
    });
  });

  applyFilters();
})();
