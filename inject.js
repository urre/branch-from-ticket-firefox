function slugify(string) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

(function () {
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
