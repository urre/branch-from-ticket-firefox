const slugify = string => {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

(() => {
  const heading = document.querySelector(
    'h1[data-test-id="issue.views.issue-base.foundation.summary.heading"]'
  );
  const ticketName = document.querySelector(
    'div[class^="BreadcrumbsItem__"] a[href*="browse"]:last-child'
  ).innerText;

  const branchStrategy = "feat/dev/";
  const branchName = `${ticketName}-${slugify(
    heading.innerText
  )}`;

  const input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = branchName;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
})();
