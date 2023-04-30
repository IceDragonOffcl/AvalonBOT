const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`**a!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n**a!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n **a!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n **a!yardım bot |** Bot Komutlarını Gösterir\n**Avalon BOT Bağlantılar**\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("Ana Komutlar")
.setDescription("**a!istatistik |** Botun istatistiklerini gösterir\n**a!linkler |** Botla Alakalı Linkleri Alırsınız\n**a!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**a!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("Yetkili Komutları ")
.setDescription("**a!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**a!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**a!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**a!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**a!kick |** İstediğiniz kişiyi sunucudan atar\n**a!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**a!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**a!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**a!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**a!temizle |** Belirtilen miktar mesajı siler\n**a!unban |** Belirtilen kişinin banını kaldırır\n**a!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("Eğlence Komutları ")
.setDescription("**a!alkış |** Bot Alkışlar\n**a!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**a!emojiyazı |** Bot mesajınızı emoji haline getirir\n**a!hackle |** Etiketlediğiniz kişiyi hackler\n**a!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**a!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**a!slot |** Slots oyununu oynar\n**a!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("Kullanıcı Komutları")
.setDescription("**a!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**a!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**a!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**a!emojiler |** Sunucuda bulunan emojileri gösterir\n**a!hesapla |** Belirtilen işlemi yapar\n**a!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**a!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**a!not-al |** Bot not alır\n**a!notum |** Notunuzu gösterir\n**a!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**a!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Ayarlamalı Komutları")
.setDescription("**a!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**a!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**a!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**a!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**a!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**a!sa-as |** Oto sa-ası ayarlarsınız\n**a!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}