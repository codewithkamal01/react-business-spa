import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme, useMediaQuery } from "@mui/material";

function Gallery() {
  const theme = useTheme();

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  const itemData = [
    {
      img: "https://imgs.search.brave.com/7xMUQ5jivwQ6KivWRj1J-vzjXPLMvP6DV9ypi0z_P-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/NzAyLzg2Ny9zbWFs/bC9idXNpbmVzcy1h/bmFseXRpY3Mtb24t/dGFibGV0LWRpc3Bs/YXktZGF0YS12aXN1/YWxpemF0aW9uLWNo/YXJ0cy1hbmQtbWFy/a2V0LWFuYWx5c2lz/LWZvci1zdHJhdGVn/aWMtaW5zaWdodHMt/cGhvdG8uanBlZw",
      title: "Analytics Dashboard",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://imgs.search.brave.com/viq5KQqeIlanNDJdfTuXm6DJYcJ_ErGmYgK-XZCLTUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUyLzY4My9zbWFs/bC93ZWJzaXRlLWRl/c2lnbi1vbi1hLWxh/cHRvcC1zY3JlZW4t/cGhvdG8uanBn",
      title: "Web Design",
    },
    {
      img: "https://imgs.search.brave.com/EjMgBbB4rL6MOerOqHIFw0ie2L87iYovLrPKy2EjL4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb2Rp/bmctY29kZS1wcm9n/cmFtLWNvbXB1dGUt/Y29kZXItZGV2ZWxv/cC1kZXZlbG9wZXIt/ZGV2ZWxvcG1lbnQt/cHJvZ3JhbW1pbmct/d2ViLXdvcmstZGVz/aWduLXNvZnR3YXJl/LWNsb3NldXAtZGVz/ay13cml0ZS04MDg2/Mjk5NS5qcGc",
      title: "Development Work",
    },
    {
      img: "https://imgs.search.brave.com/E7QjJF-8OyyfirTxSuK489GdnrdhuYJud8yuTzhuI38/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZThiZDJhYjhlNDhl/Njk0MjljYjRmZDgv/Njc2NjA4MDJmMTJi/YzU1ZWRkNjg1ZDAz/XzYyMzkxNmU0MzM2/NTZlODY3NGMzM2U0/Ml9wcm9qZWN0LW1h/bmFnZXIuanBlZw",
      title: "Client Projects",
      cols: 2,
    },
  ];

  return (
    <div
      id="gallery"
      className="w-full px-4 md:px-6 bg-gradient-to-r from-gray-900 to-black text-white py-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Work Gallery
      </h2>

      <ImageList
        variant="quilted"
        cols={cols}
        gap={10}
        sx={{ width: "100%", margin: 0 }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={isMobile ? 1 : item.cols || 1}
            rows={isMobile ? 1 : item.rows || 1}
            className="overflow-hidden rounded-lg"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={`${item.img}?w=500&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <ImageListItemBar
              title={item.title}
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Gallery;
