bot.on("message", async (ctx) => {
  const wad = ctx.message?.web_app_data;
  if (!wad?.data) return;

  try {
    const payload = JSON.parse(wad.data);

    if (payload.type === "homework") {
      const text =
        `📩 Домашка из Mini App\n` +
        `Урок: ${payload.lessonTitle} (${payload.lessonId})\n\n` +
        `${payload.text}`;

      // ответ пользователю
      await ctx.reply("✅ Домашка принята. Скоро будет фидбек.");

      // опционально: продублировать тебе в личку (если ты знаешь свой tg_id)
      // await bot.telegram.sendMessage(ТВОЙ_TG_ID, text);

      console.log(text);
    }
  } catch (e) {
    console.log("Failed to parse web_app_data", e);
  }
});
