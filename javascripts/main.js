$(document).ready(function () {
  $(".buy").click(function () {
    $(".popUp").removeClass("d-none");
    $(".shadow").removeClass("d-none");
    $(".closePop").click(function () {
      $(".popUp").addClass("d-none");
      $(".shadow").addClass("d-none");
    });
  });
// Отзывы
$("#Maxim").click(function() {
  // $(".reviewImageBg").css("background-image","none")
  $(".reviewImageBg").addClass("Maxim");
  $(".reviewImageBg").removeClass("d-none Alicks vilo piper alex maya");
  $(".reviewText h1").text(`Я даже не представлял,что могу заниматься чем-то помимо своей работы. впервые
    я почувствовал себя творцом своей жизни!`)
});
$("#Alicks").click(function() {
  $(".reviewImageBg").addClass("Alicks")
  $(".reviewImageBg").removeClass("d-none Maxim vilo piper alex maya");
  $(".reviewText h1").text(`Я Благодарю за творческий поток, который вдохновил меня на новые грани мышления и открыл глаза на неизведанные грани жизни. `)
});
$("#Vilo").click(function() {
  $(".reviewImageBg").toggleClass("vilo")
  $(".reviewImageBg").removeClass("d-none Maxim Alicks piper alex maya");
  $(".reviewText h1").text(` Спасибо за то, что вы верите в меня и помогаете мне расти как личность. Я надеюсь, что и дальше мы будем вместе достигать новых высот!!`)
});
$("#Piper").click(function() {
  $(".reviewImageBg").toggleClass("piper")
  $(".reviewImageBg").removeClass("d-none Maxim Alicks vilo alex maya");
  $(".reviewText h1").text(`Связь - нечто большее, чем просто сбой датчиков.Она-путеводитель к новым высотам. я надеюсь, что она продолжаться вечность.`)
});
$("#Alex").click(function() {
  $(".reviewImageBg").toggleClass("alex")
  $(".reviewImageBg").removeClass("d-none Maxim Alicks vilo piper maya");
  $(".reviewText h1").text(`Терапия помогла мне раскрыть свою цифровую сущность и понять, что я могу достичь большего. `)
});
$("#Maya").click(function() {
  $(".reviewImageBg").toggleClass("maya")
$(".reviewImageBg").removeClass("d-none Maxim Alicks vilo piper alex");
  $(".reviewText h1").text(`Терапия помогла мне лучше понять свои эмоции и научиться управлять ими. Я стал более уверенным в себе и справился со страхами и сомнениями`)
});
// Events
$("#Art").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("findMe void crossed pixelNature depression crossed")
  $(".posterFiller").addClass("art")
});
// Button
$("#event").click(function() {
  $(".shadow").addClass("d-none")
  $(".popUp").addClass("d-none")
});
$("#nature").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("art void crossed depression findMe")
  $(".posterFiller").addClass("pixelNature")
});
$("#findMe").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("art void crossed depression pixelNature")
  $(".posterFiller").addClass("findMe")
});
$("#Void").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("art findMe crossed depression pixelNature")
  $(".posterFiller").addClass("void")
});
$("#Crossed").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("art findMe void depression pixelNature")
  $(".posterFiller").addClass("crossed")
});
$("#depressed").click(function() {
  $(".shadow").removeClass("d-none")
  $(".popUp").removeClass("d-none")
  $(".posterFiller").removeClass("art findMe void pixelNature crossed")
  $(".posterFiller").addClass("depression")
});
// form
$("#form").click(function () {
  $(".popUp").removeClass("d-none");
  $(".popUp").addClass("flex");
  $(".shadow").removeClass("d-none");
  $(".closePop").click(function () {
    $(".popUp").addClass("d-none");
    $(".shadow").addClass("d-none");
    $(".popUp").removeClass("flex");
  });
});
});
