from yt_dlp import YoutubeDL

def descargar_video(url):
    opciones = {'outtmpl': '%(title)s.%(ext)s'}  # Guarda con el nombre del video
    with YoutubeDL(opciones) as ydl:
        ydl.download([url])

url = input("🔗 Ingresa el enlace de YouTube: ")
descargar_video(url)

