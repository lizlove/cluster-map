window.onload = (event) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZWxvdmVybyIsImEiOiJja3RvZ3pja3cwY3I3Mm9wOThyeTRiNG5hIn0.tBK7GERT9q0Ew9juN6Aa2w";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/carbondesignsystem/ck7c8cfpp08h61irrudv7f1xg", // style URL
    center: [-96.35, 39.5], // starting position [lng, lat]
    zoom: 4, // starting zoom
  });
  console.log("map is made 🗺️");
  let header = `<h1>Rusty @ FI</h1><table><thead><tr><th></th><th></th><th>cores/memory</th><th>cli</th></tr></thead>`;
  let body = "";
  // Abstract this to make the compute variables into an object.
  const markers = [
    {
      text: "<h1>Rusty @ FI</h1><table><thead><tr><th></th><th></th><th>cores/memory</th><th>cli</th></tr></thead><tbody><tr><td>2 login nodes</td><td></td><td></td><td><code>ssh rusty</code></td></tr><tr><td>440 compute nodes</td><td></td><td></td><td><code>-C opa</code></td></tr><tr><td></td><td>240 broadwell</td><td>28 cores / 512 GB</td><td><code>-C broadwell</code></td></tr><tr><td></td><td>200 skylake</td><td>40 cores / 768 GB</td><td><code>-C skylake</code></td></tr><tr><td>22 GPU nodes</td><td></td><td></td><td><code>-p gpu</code></td></tr><tr><td></td><td>88 V100</td><td></td><td><code>-C v100</code></td></tr><tr><td>4 memory nodes</td><td></td><td>96-192 cores</td><td><code>-p mem</code></td></tr></tbody>",
      id: "ABC123",
      lngLat: [],
    },
    {
      text: "text1",
      id: "ABC123",
      lngLat: [],
    },
    {
      text: "text1",
      id: "ABC123",
      lngLat: [],
    },
  ];

  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    `<h1>Rusty @ FI</h1><table><thead><tr><th></th><th></th><th>cores/memory</th><th>cli</th></tr></thead><tbody><tr><td>2 login nodes</td><td></td><td></td><td><code>ssh rusty</code></td></tr><tr><td>440 compute nodes</td><td></td><td></td><td><code>-C opa</code></td></tr><tr><td></td><td>240 broadwell</td><td>28 cores / 512 GB</td><td><code>-C broadwell</code></td></tr><tr><td></td><td>200 skylake</td><td>40 cores / 768 GB</td><td><code>-C skylake</code></td></tr><tr><td>22 GPU nodes</td><td></td><td></td><td><code>-p gpu</code></td></tr><tr><td></td><td>88 V100</td><td></td><td><code>-C v100</code></td></tr><tr><td>4 memory nodes</td><td></td><td>96-192 cores</td><td><code>-p mem</code></td></tr></tbody>`
  );

  const el = document.createElement("div");
  el.id = "marker";
  new mapboxgl.Marker(el)
    .setLngLat([-73.99102684603675, 40.74121894384252])
    .setPopup(popup)
    .addTo(map);
};
