export default function loadBalancer(chinaDownload, USDownload) {
  const download = [chinaDownload, USDownload];
  return Promise.any(download);
}
