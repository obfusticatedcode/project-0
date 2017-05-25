"use strict";$(function(){function e(){var e=$(event.target).position();return k=n(e.top,e.left)}function a(){$("div.square").removeData("jumpedPieces").removeClass("movable")}function t(e,a){return{top:a*(f+h)+"px",left:e*(f+h)+"px"}}function n(e,a){return{x:a/(f+h),y:e/(f+h)}}function o(e){var a=$("div.square"),t={};$("div.piece").each(function(e,a){var o=$(a).position(),i=n(o.top,o.left),s=8*i.y+i.x;t[s]=$(a)});var o=n(e.position().top,e.position().left),i=[{x:1,y:1},{x:-1,y:1}],s=[{x:1,y:-1},{x:-1,y:-1}],l=i.concat(s),r=void 0;r=e.hasClass("king")?l:e.hasClass("light")?i:s;var c=function(e){return!(e.x>=0&&e.x<8&&e.y>=0&&e.y<8)},d=$();return function n(o,i,s){if(!c(o)){var l=a.eq(8*o.y+o.x);$.each(i,function(i,r){var v={x:r.x+o.x,y:r.y+o.y};if(!c(v)){var u=8*v.y+v.x;if(t[u]){if(e.hasClass("dark")){if(t[u].hasClass("dark"))return}else if(t[u].hasClass("light"))return;var f={x:2*r.x+o.x,y:2*r.y+o.y};if(c(f))return;var h=8*f.y+f.x;if(!t[h]){var p=a.eq(h);if(!p.is(d)){d=d.add(p);var g=t[u];l.data("jumpedPieces")&&(g=g.add(l.data("jumpedPieces"))),p.data("jumpedPieces",g),n(f,r,!0)}}}else if(!s){var C=a.eq(u);C.data("jumpedPieces",$()),d=d.add(C)}}})}}(o,r,!1),d}function i(e,a,t){e.css("top",a),e.css("left",t)}function s(e){e.hasClass("selected")?e.removeClass("selected"):($("div.piece").each(function(e,a){$(a).hasClass("selected")&&$(a).removeClass("selected")}),e.addClass("selected"))}function l(){P.html(parseInt(P.html())+1)}function r(e){var a="";a="light"===e?"#lightMoveCount":"#darkMoveCount";var t=parseInt($(a).html());t++,$(a).html(t),console.log(t),t%2==1?(console.log("Hello odd number"),console.log(q)):t%2==0&&(console.log("Hello even number"),console.log(b))}function c(e){e.data("jumpedPieces").remove()}function d(e,a){for(var t=0;t<64;t++)(a<8||a>=56)&&e.addClass("king")}function v(){var e=q.length,a=b.length;return 0===e?(y.text("Player 1 Wins"),y.slideDown("Player 1 Wins")):0===a?(console.log("Player 2 wins"),y.text("Player 2 Wins")):1===a&&1===e?(console.log("It's a draw"),y.text("It's a draw")):void 0}function u(){location.reload()}var f=46,h=2,p=$("div#board"),g=$("div#pieces"),C=$("#reset-button"),m=$("#rules-button"),x=$(".instructions"),y=$("#winner"),k=null;!function(){function e(e){return e%8%2^Math.floor(e/8)%2}for(var a=0;a<64;a++)p.append($("<div/>").addClass("square"));for(var t=0;t<24;t++)g.append($("<div/>").addClass("piece"));$("div.square").each(function(a){0===e(a)?$(this).addClass("light"):$(this).addClass("dark")})}(),function(){$("piece"),$("div.piece:even").addClass("light"),$("div.piece:odd").addClass("dark")}(),function(){$("div.piece.dark").each(function(e,a){var n=Math.floor(e/4)+5,o=e%4*2+(1-n%2),s=t(o,n);i($(a),s.top,s.left)})}(),function(){var e=$("div.piece.light");e.each(function(a,n){console.log(e.length);var o=Math.floor(a/4),s=a%4*2+(1-o%2),l=t(s,o);i($(n),l.top,l.left)})}(),C.on("click",function(){u()}),m.on("click",function(){x.toggle("slow"),console.log("Clicking here works")}),$("div.square").on("click",function(n){e();var o=$(n.target);if(o.hasClass("movable")){var s=$("div.piece.selected");if(1===s.length){var u=o.prevAll().length,f=u%8,h=Math.floor(u/8),p=t(f,h);i(s,p.top,p.left),c(o),d(s,o.prevAll().length),s.removeClass("selected"),$("div.square").removeClass("movable"),v(),l();r(!0===s.hasClass("light")?"light":"dark"),a()}}});var P=$("#moveCounter");!function(){$("div.piece").on("click",function(e){var t=$(e.target);s(t),a(),t.hasClass("selected")&&o(t).addClass("movable")})}();var b=$("div.piece.light"),q=$("div.piece.dark")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJldmVudCIsInRhcmdldCIsImNvb3JkcyIsImdldENvb3JkcyIsInRvcCIsImxlZnQiLCJnZXRQaXhlbHMiLCJyZW1vdmVEYXRhIiwicmVtb3ZlQ2xhc3MiLCJ4IiwieSIsImJvcmRlciIsIndpZHRoIiwidGFrZW5TcXVhcmVzIiwiJHBpZWNlIiwiJHNxdWFyZXMiLCJlYWNoIiwiaW5kZXgiLCJwaWVjZSIsImxpZ2h0RGlyZWN0aW9uIiwic3F1YXJlSW5kZXgiLCJkYXJrRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwib3V0T2ZCb3VuZHMiLCJraW5nRGlyZWN0aW9uIiwiY29uY2F0IiwiYnVpbGRNb3ZlcyIsIiRjdXJyZW50U3F1YXJlIiwibmV3Q29vcmRzIiwiJGxlZ2FsU3F1YXJlcyIsIm5ld1NxdWFyZUluZGV4IiwianVtcHNPbmx5IiwiZXEiLCJoYXNDbGFzcyIsImp1bXBTcXVhcmVJbmRleCIsImp1bXBDb29yZHMiLCIkanVtcGVkUGllY2VzIiwiYWRkIiwiJG5ld1NxdWFyZSIsImlzIiwiZGF0YSIsInNldFVwUGllY2VzIiwiYWRkQ2xhc3MiLCJtb3ZlUGllY2VUbyIsIm5ld1RvcCIsIm5ld0xlZnQiLCJjc3MiLCJpIiwidG9nZ2xlU2VsZWN0IiwicGllY2VTZWxlY3QiLCJpbmNyZW1lbnRNb3ZlQ291bnQiLCJ3aGljaENvdW50ZXIiLCJjb25zb2xlIiwiJG1vdmVDb3VudGVyIiwiJG1vdmVzIiwiaHRtbCIsIiRsaWdodFBpZWNlcyIsImNvbG9yIiwicmVtb3ZlQ2FwdHVyZWRQaWVjZXMiLCIkc3F1YXJlIiwibG9nIiwiY2hlY2tLaW5nIiwiJHdpbm5lciIsInJlbW92ZSIsInRleHQiLCJwaWVjZXNMZWZ0IiwiZGFya1BpZWNlcyIsIiRkYXJrUGllY2VzIiwibGVuZ3RoIiwibGlnaHRQaWVjZXMiLCJzbGlkZURvd24iLCJyZXNldCIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGJvYXJkIiwiJHBpZWNlcyIsIiRyZXNldEJ1dHRvbiIsIiRydWxlc0J1dHRvbiIsImZsb29yIiwiJGVhY2hTcXVhcmUiLCJhcHBlbmQiLCJsaWdodE9yRGFyayIsInRoaXMiLCJzcXVhcmVDb3VudCIsIk1hdGgiLCJwaXhlbFBvc2l0aW9uIiwib24iLCIkaW5zdHJ1Y3Rpb25zIiwidG9nZ2xlIiwiJHBpZWNlVG9Nb3ZlIiwiZSIsIiRzZWxlY3RlZFBpZWNlIiwicHJldkFsbCIsInBpeGVscyIsImluY3JlbWVudE1vdmVDb3VudGVyIiwicmVzZXRNb3ZhYmxlcyIsIiR0aGlzUGllY2UiLCJnZXRNb3ZhYmxlU3F1YXJlcyJdLCJtYXBwaW5ncyI6IllBQ0FBLEdBQUUsV0ErSkMsUUFBQUMsS0FQQyxHQUFNQyxHQUFXRixFQUFFRyxNQUFNQyxRQUFRRixVQVVuQyxPQURBRyxHQUFBQyxFQUFBSixFQUFBSyxJQUFBTCxFQUFBTSxNQUlBLFFBQVNDLEtBQ0xULEVBQUEsY0FBQVUsV0FBQSxnQkFBQUMsWUFBQSxXQURKLFFBQVNGLEdBQVVHLEVBQUVDLEdBV3JCLE9BQ0FOLElBQVNELEdBQUFBLEVBQVRRLEdBQTZCLEtBQ3pCTixLQUFBSSxHQUFBRyxFQUFBRCxHQUFBLE1BREosUUFBU1IsR0FBVUMsRUFBSUMsR0FXdkIsT0FQSUksRUFBS0osR0FBUU8sRUFBUUQsR0FTdkJELEVBQUFOLEdBQUFRLEVBQUFELElBTUEsUUFBSUUsR0FBSkMsR0FHUSxHQUFBQyxHQUFBbEIsRUFBQSxjQUZSZ0IsSUFBQWhCLEdBQUUsYUFBYW1CLEtBQUssU0FBU0MsRUFBTUMsR0FXbkMsR0FBQW5CLEdBQUFGLEVBQUFxQixHQUFBbkIsV0FDTW9CLEVBQUFBLEVBQ0VwQixFQURlSyxJQUVsQkssRUFBTUMsTUFFWFUsRUFBQSxFQUFBbEIsRUFBQVEsRUFBQVIsRUFBQU8sQ0FDQUksR0FBTVEsR0FDSVgsRUFBR1EsSUFUYixJQUFNaEIsR0FBU0MsRUFBVVcsRUFBT2YsV0FBV0ssSUFBSVUsRUFBT2YsV0FBV00sTUFpQi9E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SSxFQUFBdkYsRUFBQUcsRUFBQUMsRUFFQW1ELEdBQVU4QixFQUFlRixFQUFBQSxJQUFBQSxFQUFhRyxNQUV0Q0QsRUFBZW5GLEdBR2ZYLEVBQUU4RixFQUFjbkYsRUFBaEJvRixVQUFBeEIsUUFFQXVCLEVBQUFuRixZQUFBLFlBR0FYLEVBQUEsY0FBQVcsWUFBQSxXQUdBeUQsSUFHQTZCLEdBMUNONUMsSUE2Q0ssSUFBQXlDLEVBQUExRCxTQUFBLFNBQUEsUUFBQSxRQU1QOEQsT0E0UElsRyxJQUFFc0QsR0FBY0ksRUFBS0QsaUJBOVVyQnpELFdBQ0lBLEVBQUEsYUFBQXlGLEdBQUEsUUFBQSxTQUFBdEYsR0FHQSxHQUFBZ0csR0FBQW5HLEVBQUFHLEVBQUFDLE9BR0Y4RixHQUFBQSxHQUNFQSxJQUVBRSxFQUFBQSxTQUFrQkQsYUFDbkJDLEVBQUFELEdBQUF0RCxTQUFBLGVBd1dQLElBQUFjLEdBQUEzRCxFQUFBLG1CQUNBc0UsRUFBQXRFLEVBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2FkaW5nIEpTXG4kKCgpPT57XG5cbiAgLy9HTE9CQUwgVkFSSUFCTEVTXG4gIGNvbnN0IHdpZHRoID0gNDY7XG4gIGNvbnN0IGJvcmRlciA9IDI7XG4gIGNvbnN0ICRib2FyZCA9ICQoJ2RpdiNib2FyZCcpO1xuICBjb25zdCAkcGllY2VzID0gJCgnZGl2I3BpZWNlcycpO1xuICBjb25zdCAkcmVzZXRCdXR0b24gPSAkKCcjcmVzZXQtYnV0dG9uJyk7XG4gIGNvbnN0ICRydWxlc0J1dHRvbiA9ICQoJyNydWxlcy1idXR0b24nKTtcbiAgY29uc3QgJGluc3RydWN0aW9ucyA9ICQoJy5pbnN0cnVjdGlvbnMnKTtcbiAgY29uc3QgJHdpbm5lciA9ICQoJyN3aW5uZXInKTtcblxuXG4gIGxldCBjb29yZHMgPSBudWxsOy8vc2V0dGluZyBjb29yZHMgZ2xvYmFsbHkgc28gaXQncyBjb25zdGFudGx5IHVwZGF0aW5nXG4gIC8vc2V0IHVwIHRoZSBib2FyZCB3aXRoIHRoZSBjb3JyZWN0IGNsYXNzZXMgZm9yIHRoZSBsaWdodCBhbmQgZGFyayBzcXVhcmVzXG4gIHNldFVwQm9hcmQoKTtcbiAgLy9zZXRzIHVwIHRoZSBjbGFzc2VzIGZvciB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIHBpZWNlXG4gIHNldFVwUGllY2VzKCk7XG4gIC8vc2V0dGluZyB1cCB0aGUgZGFya1BpZWNlc1xuICBkYXJrUGllY2VzKCk7XG4gIC8vIHNldHRpbmcgdXAgdGhlIGxpZ2h0UGllY2VzXG4gIGxpZ2h0UGllY2VzKCk7XG5cblxuICAvL0xJR0hUIFBJRUNFU1xuICBmdW5jdGlvbiBsaWdodFBpZWNlcygpe1xuICAgIGNvbnN0ICRsaWdodFBpZWNlcyA9ICQoJ2Rpdi5waWVjZS5saWdodCcpO1xuICAgIC8vdGhpcyBsb29wIG1vdmVzIGFsbCB0aGUgbGlnaHQgcGllY2VzIHRvIHRoZWlyIGluaXRpYWwgcG9zaXRpb25zXG4gICAgJGxpZ2h0UGllY2VzLmVhY2goZnVuY3Rpb24oaW5kZXgscGllY2UpIHtcbiAgICAgIC8vIFRFU1QgY2hlY2tpbmcgdGhlIGxlbmd0aFxuICAgICAgY29uc29sZS5sb2coJGxpZ2h0UGllY2VzLmxlbmd0aCk7XG4gICAgICAvL3R1cm5pbmcgdGhlIGluZGV4IChmcm9tIDAgLSAxMSlcbiAgICAgIC8vaW50byBhIHgseSBzcXVhcmUgY29vcmRpbmF0ZSB1c2luZyBtYXRoXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIDQpO1xuICAgICAgY29uc3QgeCA9IChpbmRleCAlIDQpICogMiArICgxIC0geSUyKTtcblxuICAgICAgLy90dXJuaW5nIHRoZSB4LHkgY29vcmRpbmF0ZSBpbnRvIGEgcGl4ZWwgcG9zaXRpb25cbiAgICAgIGNvbnN0IHBpeGVsUG9zaXRpb24gPSBnZXRQaXhlbHMoeCx5KTtcbiAgICAgIC8vYWN0dWFsbHkgbW92aW5nIHRoZSBwaWVjZSB0byBpdHMgaW5pdGlhbCBwb3NpdGlvblxuICAgICAgbW92ZVBpZWNlVG8oJChwaWVjZSkscGl4ZWxQb3NpdGlvbi50b3AscGl4ZWxQb3NpdGlvbi5sZWZ0KTtcbiAgICB9KTtcbiAgfS8vZW5kIG9mIGxpZ2h0UGllY2VzIGZ1bmN0aW9uXG5cblxuICAvL0RBUksgUElFQ0VTXG4gIGZ1bmN0aW9uIGRhcmtQaWVjZXMoKXtcbiAgICBjb25zdCAkZGFya1BpZWNlcyA9ICAgJCgnZGl2LnBpZWNlLmRhcmsnKTtcbiAgICAgICAgLy90aGlzIGxvb3AgbW92ZXMgYWxsIHRoZSBkYXJrIHBpZWNlcyB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xuICAgICRkYXJrUGllY2VzLmVhY2goZnVuY3Rpb24oaW5kZXgscGllY2UpIHtcbiAgICAgICAgLy90dXJuaW5nIHRoZSBpbmRleCAoZnJvbSAwIC0gMTEpXG4gICAgICAgIC8vaW50byBhIHgseSBzcXVhcmUgY29vcmRpbmF0ZSB1c2luZyBtYXRoXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleC80KSArIDU7XG4gICAgICBjb25zdCB4ID0gKGluZGV4ICUgNCkgKiAyICsgKDEteSUyKTtcblxuICAgICAgICAvL3R1cm5pbmcgdGhlIHgseSBjb29yZGluYXRlIGludG8gYSBwaXhlbCBwb3NpdGlvblxuICAgICAgY29uc3QgcGl4ZWxQb3NpdGlvbiA9IGdldFBpeGVscyh4LHkpO1xuICAgICAgICAvL21vdmluZyB0aGUgcGllY2UgdG8gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIG1vdmVQaWVjZVRvKCQocGllY2UpLHBpeGVsUG9zaXRpb24udG9wLHBpeGVsUG9zaXRpb24ubGVmdCk7XG4gICAgfSk7XG4gIH0vL2VuZCBvZiBkYXJrUGllY2VzIGZ1bmN0aW9uXG5cblxuXG4gIC8vRVZFTlRTXG4gIGZ1bmN0aW9uIHBpZWNlU2VsZWN0KCl7XG4gICAgJCgnZGl2LnBpZWNlJykub24oJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIC8vc2VsZWN0ZWQgdmFyaWFibGVcbiAgICAgICAgLy90dXJuIGB0aGlzYCBpbnRvIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgY29uc3QgJHRoaXNQaWVjZSA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgLy90b2dnbGluZyB0aGUgJ3NlbGVjdGVkJyBjbGFzcyBvZiB0aGlzIHBpZWNlXG4gICAgICAgIC8vYW5kIHBvc3NpYmxlIGRlc2VsZWN0aW5nIG90aGVyIHBpZWNlc1xuICAgICAgdG9nZ2xlU2VsZWN0KCR0aGlzUGllY2UpO1xuICAgICAgcmVzZXRNb3ZhYmxlcygpO1xuICAgICAgICAvL2dldCB0aGUgbGVnYWwgbW92ZXMgZm9yIHRoaXNcbiAgICAgIGlmICgkdGhpc1BpZWNlLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGdldE1vdmFibGVTcXVhcmVzKCR0aGlzUGllY2UpLmFkZENsYXNzKCdtb3ZhYmxlJyk7XG4gICAgICB9XG4gICAgfSk7Ly9lbmQgb2YgcGllY2UgY2xpY2sgZXZlbnRcblxuICB9XG5cbiAgLy8gQlVUVE9OU1xuICAvL3Jlc2V0dGluZyB0aGUgZ2FtZS5cbiAgJHJlc2V0QnV0dG9uLm9uKCdjbGljaycsICgpPT57XG4gICAgcmVzZXQoKTtcbiAgICAvLyBzZXR0aW5nIHVwIHRoZSBwaWVjZXMgYWZ0ZXIgZW1wdHlpbmcgdGhlbS5cbiAgfSk7XG5cbiAgLy9oaWRpbmcgYW5kIHNob3dpbmcgdGhlIHJ1bGVzLlxuICAkcnVsZXNCdXR0b24ub24oJ2NsaWNrJywgKCk9PntcbiAgICAkaW5zdHJ1Y3Rpb25zLnRvZ2dsZSgnc2xvdycpO1xuICAgIGNvbnNvbGUubG9nKGBDbGlja2luZyBoZXJlIHdvcmtzYCk7XG4gIH0pO1xuXG5cblxuICAkKCdkaXYuc3F1YXJlJykub24oJ2NsaWNrJywgKGUpPT57XG5cbiAgICBjdXJyZW50UG9zaXRpb24oKTsvL3RoZSBjdXJyZW50UG9zaXRpb24gb2YgdGhlIHNxdWFyZTsgY29vcmRzXG4gICAgLy90dXJuIGBlIG9yIGV2ZW50YCBpbnRvIGEgalF1ZXJ5IG9iamVjdFxuICAgIGNvbnN0ICRwaWVjZVRvTW92ZSA9ICQoZS50YXJnZXQpO1xuXG5cbiAgICAvL2lmICQodGhpcykgaXMgYSBsZWdhbCBzcXVhcmUgdG8gbW92ZSB0by4uLlxuICAgIGlmICgkcGllY2VUb01vdmUuaGFzQ2xhc3MoJ21vdmFibGUnKSkge1xuXG4gICAgICAgICAgLy9nZXQgdGhlIHBpZWNlIHdpdGggdGhlIGNsYXNzICdzZWxlY3RlZCdcbiAgICAgIGNvbnN0ICRzZWxlY3RlZFBpZWNlID0gJCgnZGl2LnBpZWNlLnNlbGVjdGVkJyk7XG4gICAgICAgICAgLy9vbmx5IG1vdmUgaWYgdGhlcmUgaXMgZXhhY3RseSBvbmUgc2VsZWN0ZWQgcGllY2VcbiAgICAgIGlmICgkc2VsZWN0ZWRQaWVjZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBpbmRleCBvZiB0aGUgc3F1YXJlXG4gICAgICAgICAgICAvL2FuZCB0cmFuc2xhdGUgaXQgdG8gcGl4ZWwgcG9zaXRpb25cbiAgICAgICAgY29uc3QgaW5kZXggPSAkcGllY2VUb01vdmUucHJldkFsbCgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgeCA9IGluZGV4ICUgODtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcbiAgICAgICAgY29uc3QgcGl4ZWxzID0gZ2V0UGl4ZWxzKHgseSk7XG4gICAgICAgICAgICAvL2FjdHVhbGx5IGRvIHRoZSBtb3ZpbmdcbiAgICAgICAgbW92ZVBpZWNlVG8oJHNlbGVjdGVkUGllY2UscGl4ZWxzLnRvcCxwaXhlbHMubGVmdCk7XG4gICAgICAgICAgLy9yZW1vdmVDYXB0dXJlZFBpZWNlc1xuICAgICAgICByZW1vdmVDYXB0dXJlZFBpZWNlcygkcGllY2VUb01vdmUpO1xuICAgICAgICAvLy5wcmV2QWxsKCkubGVuZ3RoIGlzIHVzZWQgdG8gZ2V0IHRoZSBpbmRleFxuICAgICAgICAvL29mIHRoZSBzZWxlY3RlZCBwaWVjZVxuICAgICAgICBjaGVja0tpbmcoJHNlbGVjdGVkUGllY2UsJHBpZWNlVG9Nb3ZlLnByZXZBbGwoKS5sZW5ndGgpO1xuICAgICAgICAvL2RlLXNlbGVjdCB0aGUgcGllY2UgdG8gZW5kIHRoZSBtb3ZlXG4gICAgICAgICRzZWxlY3RlZFBpZWNlLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vc2V0IHRoZSBuZXcgbGVnYWwgbW92ZXNcbiAgICAgICAgJCgnZGl2LnNxdWFyZScpLnJlbW92ZUNsYXNzKCdtb3ZhYmxlJyk7XG5cbiAgICAgICAgLy8gVEVTVC4gdGVzdGluZyB0aGUgd2lubmluZyBjb25kaXRpb25zIGJ5IGNoZWNraW5nIHRoZSBudW1iZXIgb2YgcGllY2VzIGxlZnQgb24gdGhlIGJvYXJkXG4gICAgICAgIHBpZWNlc0xlZnQoKTtcblxuICAgICAgICAvL2luY3JlbWVudCB0aGUgbW92ZSBjb3VudGVyXG4gICAgICAgIGluY3JlbWVudE1vdmVDb3VudGVyKCk7XG5cbiAgICAgICAgY29uc3QgY29sb3IgPSAkc2VsZWN0ZWRQaWVjZS5oYXNDbGFzcygnbGlnaHQnKSA9PT0gdHJ1ZSA/ICdsaWdodCcgOiAnZGFyayc7XG5cbiAgICAgICAgaW5jcmVtZW50TW92ZUNvdW50KGNvbG9yKTtcbiAgICAgICAgLy9yZXNldCB0aGUgc3F1YXJlcyB0byBhbGxvdyBtb3Zlc1xuICAgICAgICByZXNldE1vdmFibGVzKCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cblxuLy8gTU9SRSBGVU5DVElPTlNcbi8vdGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBkYXRhIGl0ZW0gd2l0aCBrZXkgJ2p1bXBlZFBpZWNlcycgZnJvbSBldmVyeSBkaXYuc3F1YXJlXG4vLyBhbmQgcmVtb3ZlcyB0aGUgY2xhc3MgJ21vdmFibGUnIGZyb20gZXZlcnkgc3F1YXJlXG4vL2NoZWNrcyB0aGUgY3VycmVudFBvc2l0aW9uIG9mIHRoZSBjbGlja2VkIG9yIHNlbGVjdGVkIGRpdiBhbmQgcmV0dXJucyB0aGUgY29vcmRzLlxuICBmdW5jdGlvbiBjdXJyZW50UG9zaXRpb24oKXtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICQoZXZlbnQudGFyZ2V0KS5wb3NpdGlvbigpO1xuICAgIGNvb3JkcyA9IGdldENvb3Jkcyhwb3NpdGlvbi50b3AscG9zaXRpb24ubGVmdCk7XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0TW92YWJsZXMoKSB7XG4gICAgJCgnZGl2LnNxdWFyZScpLnJlbW92ZURhdGEoJ2p1bXBlZFBpZWNlcycpLnJlbW92ZUNsYXNzKCdtb3ZhYmxlJyk7XG4gIH1cblxuICAvL2Z1bmN0aW9uIGZvciB0cmFuc2xhdGluZyBhbiB4LHkgY29vcmRpbmF0ZXMgdG8gYSBwaXhlbCBwb3NpdGlvblxuICAvL3RoZSBjb252ZW50aW9uIGlzIHRoYXQgdGhlIHNxdWFyZSBpbiB0aGUgdXBwZXIgbGVmdCBjb3JuZXIgaXMgYXQgcG9zaXRpb24gMCwwXG4gIC8vdGhlIHNxdWFyZSBpbiB0aGUgdXBwZXIgcmlnaHQsIGF0IDcsMCBhbmQgdGhlIGxvd2VyXG4gIC8vcmlnaHQgYXQgNyw3XG4gIGZ1bmN0aW9uIGdldFBpeGVscyh4LHkpIHtcbiAgICAgIC8vdGFrZXMgYW4geCx5IHBvc2l0aW9uLCByZXR1cm5zXG4gICAgICAvL3BpeGVscyBmcm9tIHRoZSBsZWZ0LCByaWdodFxuICAgIHJldHVybiB7XG4gICAgICAndG9wJzogKHkgKiAod2lkdGgrYm9yZGVyKSkrJ3B4JyxcbiAgICAgICdsZWZ0JzogKHggKiAod2lkdGgrYm9yZGVyKSkrJ3B4J1xuICAgIH07XG4gIH1cblxuICAvL2Z1bmN0aW9uIGZvciB0dXJuaW5nIGEgcGl4ZWwgcG9zaXRpb25cbiAgLy9pbnRvIHRoZSB4LHkgY29vcmRpbmF0ZSBvZiBhIHNxdWFyZSBvbiB0aGUgYm9hcmRcbiAgLy9pdCBmb2xsb3dzIHRoZSBzYW1lIGNvb3JkaW5hdGUgY29udmVudGlvbiBhcyBnZXRQaXhlbHNcbiAgZnVuY3Rpb24gZ2V0Q29vcmRzKHRvcCxsZWZ0KSB7XG4gICAgICAvL3JldHVybnMgYW4geCBhbmQgYSB5XG4gICAgICAvL2dpdmVuIGEgdG9wIGFuZCBsZWZ0IHBpeGVsc1xuICAgIHJldHVybiB7XG4gICAgICAneCc6IGxlZnQgLyAod2lkdGggKyBib3JkZXIpLFxuICAgICAgJ3knOiB0b3AgLyAod2lkdGggKyBib3JkZXIpXG4gICAgfTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gZm9yIHJldHVybmluZyB0aGUgc2V0IG9mIGxlZ2FsIG1vdmVzIGdpdmVuIGEgcGllY2Vcbi8vIHRoaXMgYWxzbyBzdG9yZXMganVtcGVkIHBpZWNlcyBpbiBhIGRhdGEgZWxlbWVudCBvZiBlYWNoIHNxdWFyZSB0aGF0IGNhbiBiZSBtb3ZlZCB0b1xuICBmdW5jdGlvbiBnZXRNb3ZhYmxlU3F1YXJlcygkcGllY2UpIHtcblxuICAgIC8vc2VsZWN0IGFsbCBvZiB0aGUgc3F1YXJlc1xuICAgIGNvbnN0ICRzcXVhcmVzID0gJCgnZGl2LnNxdWFyZScpO1xuXG4gICAgLy9zZWxlY3QgdGhlIG9jY3VwaWVkIG9uZXMgdXNpbmcgdGhlIGpRdWVyeSBtYXAoKSBtZXRob2RcbiAgICAvL21hcCBjcmVhdGVzIGEgbmV3IG9iamVjdCBmcm9tIGFuIGV4aXN0aW5nIG9uZVxuICAgIC8vdXNpbmcgYSB0cmFuc2xhdGlvbiBmdW5jdGlvblxuICAgIHZhciB0YWtlblNxdWFyZXMgPSB7fTtcbiAgICAkKCdkaXYucGllY2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG5cbiAgICAgICAgICAgIC8vdGhpcyBmdW5jdGlvbiB0cmFuc2xhdGVzIGEgcGllY2VcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gJChwaWVjZSkucG9zaXRpb24oKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3Jkcyhwb3NpdGlvbi50b3AscG9zaXRpb24ubGVmdCk7XG4gICAgICBjb25zdCBzcXVhcmVJbmRleCA9IGNvb3Jkcy55ICogOCArIGNvb3Jkcy54O1xuICAgICAgdGFrZW5TcXVhcmVzW3NxdWFyZUluZGV4XSA9ICQocGllY2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKCRwaWVjZS5wb3NpdGlvbigpLnRvcCwkcGllY2UucG9zaXRpb24oKS5sZWZ0KTtcblxuICAgIC8vbGlnaHRzIG1vdmUgZG93biB0aGUgYm9hcmRcbiAgICBjb25zdCBsaWdodERpcmVjdGlvbiA9IFtcbiAgICAgICAge3g6IDEseTogMX0sXG4gICAgICAgIHt4OiAtMSx5OiAxfVxuICAgIF07XG4gICAgLy9kYXJrcyBtb3ZlIHVwIHRoZSBib2FyZFxuICAgIGNvbnN0IGRhcmtEaXJlY3Rpb24gPSBbXG4gICAgICAgIHt4OiAxLHk6IC0xfSxcbiAgICAgICAge3g6IC0xLHk6IC0xfVxuICAgIF07XG4gICAgLy9raW5ncyBtb3ZlIGluIGFueSBkaXJlY3Rpb25cbiAgICBjb25zdCBraW5nRGlyZWN0aW9uID0gbGlnaHREaXJlY3Rpb24uY29uY2F0KGRhcmtEaXJlY3Rpb24pO1xuXG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBpZiAoJHBpZWNlLmhhc0NsYXNzKCdraW5nJykpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGtpbmdEaXJlY3Rpb247XG4gICAgfSBlbHNlIGlmICgkcGllY2UuaGFzQ2xhc3MoJ2xpZ2h0JykpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGxpZ2h0RGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBkYXJrRGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG91dE9mQm91bmRzID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICByZXR1cm4gIShjb29yZHMueCA+PSAwICYmIGNvb3Jkcy54IDwgOCAmJiBjb29yZHMueSA+PSAwICYmIGNvb3Jkcy55IDwgOCk7XG4gICAgfTtcblxuICAgIGxldCAkbGVnYWxTcXVhcmVzID0gJCgpO1xuICAgIGNvbnN0IGJ1aWxkTW92ZXMgPSBmdW5jdGlvbihjb29yZHMsZGlyZWN0aW9uLGp1bXBzT25seSkge1xuICAgICAgaWYgKG91dE9mQm91bmRzKGNvb3JkcykpIHJldHVybjtcbiAgICAgICAgLy9jdXJyZW50IHNxdWFyZSBpcyBhdCBjb29yZHNcbiAgICAgIGNvbnN0ICRjdXJyZW50U3F1YXJlID0gJHNxdWFyZXMuZXEoY29vcmRzLnkqOCArIGNvb3Jkcy54KTtcbiAgICAgICQuZWFjaChkaXJlY3Rpb24sZnVuY3Rpb24oaW5kZXgsZGlyZWN0aW9uKSB7XG5cbiAgICAgICAgY29uc3QgbmV3Q29vcmRzID0ge1xuICAgICAgICAgIHg6IGRpcmVjdGlvbi54ICsgY29vcmRzLngsXG4gICAgICAgICAgeTogZGlyZWN0aW9uLnkgKyBjb29yZHMueVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvdXRPZkJvdW5kcyhuZXdDb29yZHMpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZUluZGV4ID0gOCpuZXdDb29yZHMueSArIG5ld0Nvb3Jkcy54O1xuICAgICAgICAgICAgLy9pZiB0aGUgc3F1YXJlIGlzIHRha2VuLFxuICAgICAgICBpZiAodGFrZW5TcXVhcmVzW25ld1NxdWFyZUluZGV4XSkge1xuXG4gICAgICAgICAgICAgICAgLy9DYW4gb25seSBqdW1wIGlmIHBpZWNlIGlzIGRpZmZlcmVudFxuICAgICAgICAgIGlmICgkcGllY2UuaGFzQ2xhc3MoJ2RhcmsnKSkge1xuICAgICAgICAgICAgaWYgKHRha2VuU3F1YXJlc1tuZXdTcXVhcmVJbmRleF0uaGFzQ2xhc3MoJ2RhcmsnKSkgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFrZW5TcXVhcmVzW25ld1NxdWFyZUluZGV4XS5oYXNDbGFzcygnbGlnaHQnKSkgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGp1bXBDb29yZHMgPSB7XG4gICAgICAgICAgICB4OiBkaXJlY3Rpb24ueCoyICsgY29vcmRzLngsXG4gICAgICAgICAgICB5OiBkaXJlY3Rpb24ueSoyICsgY29vcmRzLnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChvdXRPZkJvdW5kcyhqdW1wQ29vcmRzKSkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3QganVtcFNxdWFyZUluZGV4ID0ganVtcENvb3Jkcy55KjggKyBqdW1wQ29vcmRzLng7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUganVtcCBzcXVhcmUgaXMgZnJlZS4uLlxuICAgICAgICAgICAgICAgIC8vYWRkIGl0IGFuZCB0aGUgZGF0YS1qdW1wZWQtcGllY2VzXG4gICAgICAgICAgaWYgKCF0YWtlblNxdWFyZXNbanVtcFNxdWFyZUluZGV4XSkge1xuICAgICAgICAgICAgY29uc3QgJG5ld1NxdWFyZSA9ICRzcXVhcmVzLmVxKGp1bXBTcXVhcmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgd2UgaGF2ZW4ndCBhbHJlYWR5IHNlZW4gaXRcbiAgICAgICAgICAgIGlmICghJG5ld1NxdWFyZS5pcygkbGVnYWxTcXVhcmVzKSkge1xuXG4gICAgICAgICAgICAgIC8vYWRkIHRoZSBwYXNzZWQgb3ZlciBzcXVhcmUgdG8gaXRcbiAgICAgICAgICAgICAgJGxlZ2FsU3F1YXJlcyA9ICRsZWdhbFNxdWFyZXMuYWRkKCRuZXdTcXVhcmUpO1xuXG4gICAgICAgICAgICAgIC8vYW5kIHRoZSBqdW1wZWQgc3F1YXJlcyBmcm9tIGhvdyB3ZSBnb3QgaGVyZVxuICAgICAgICAgICAgICBsZXQgJGp1bXBlZFBpZWNlcyA9IHRha2VuU3F1YXJlc1tuZXdTcXVhcmVJbmRleF07XG4gICAgICAgICAgICAgIGlmICgkY3VycmVudFNxdWFyZS5kYXRhKCdqdW1wZWRQaWVjZXMnKSkge1xuICAgICAgICAgICAgICAgICRqdW1wZWRQaWVjZXMgPSAkanVtcGVkUGllY2VzLmFkZCgkY3VycmVudFNxdWFyZS5kYXRhKCdqdW1wZWRQaWVjZXMnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJG5ld1NxdWFyZS5kYXRhKCdqdW1wZWRQaWVjZXMnLCRqdW1wZWRQaWVjZXMpO1xuXG4gICAgICAgICAgICAgIC8vYW5kIHJlY3Vyc2UsIHdpdGgganVtcHNPbmx5IHNldCB0byB0cnVlXG4gICAgICAgICAgICAgIGJ1aWxkTW92ZXMoanVtcENvb3JkcyxkaXJlY3Rpb24sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFqdW1wc09ubHkpIHtcbiAgICAgICAgICBjb25zdCAkbmV3U3F1YXJlID0gJHNxdWFyZXMuZXEobmV3U3F1YXJlSW5kZXgpO1xuICAgICAgICAgICRuZXdTcXVhcmUuZGF0YSgnanVtcGVkUGllY2VzJywkKCkpO1xuICAgICAgICAgICRsZWdhbFNxdWFyZXMgPSAkbGVnYWxTcXVhcmVzLmFkZCgkbmV3U3F1YXJlKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGJ1aWxkTW92ZXMoY29vcmRzLGRpcmVjdGlvbixmYWxzZSk7XG4gICAgcmV0dXJuICRsZWdhbFNxdWFyZXM7XG5cbiAgfS8vZW5kIG9mIGdldE1vdmFibGVTcXVhcmVzXG5cbiAgZnVuY3Rpb24gc2V0VXBQaWVjZXMoKSB7XG4gICAgICAvL3NlbGVjdCBhbGwgdGhlIGRpdnMgd2l0aCBjbGFzcyAncGllY2UnXG4gICAgJCgncGllY2UnKTtcbi8vYWRkIHRoZSAnbGlnaHQnIGNsYXNzIHRvIGhhbGYgb2YgdGhlbVxuICAgICQoJ2Rpdi5waWVjZTpldmVuJykuYWRkQ2xhc3MoJ2xpZ2h0Jyk7XG4vL2pRdWVyeSdzIGV2ZW4gYW5kIG9kZCBzZWxlY3RvciBtZXRob2RzIHRvIGFzc2lnbiB0aGUgY2xhc3NlcyAubGlnaHQgYW5kIC5kYXJrLlxuLy9hZGQgdGhlICdkYXJrJyB0byB0aGUgb3RoZXIgaGFsZlxuICAgICQoJ2Rpdi5waWVjZTpvZGQnKS5hZGRDbGFzcygnZGFyaycpO1xuICB9XG5cbiAgLy9hY3R1YWxseSBtb3ZpbmcgdGhlIHBpZWNlXG4gIGZ1bmN0aW9uIG1vdmVQaWVjZVRvKCRwaWVjZSxuZXdUb3AsbmV3TGVmdCkge1xuICAgICAgLy9zZXQgdGhlIGNzcyAndG9wJyBhbmQgJ2xlZnQnXG4gICAgICAvL2F0dHJpYnV0ZXMgb2YgdGhlIHBhc3NlZCBwaWVjZVxuICAgICAgLy90byB0aGUgYXJndW1lbnRzIG5ld1RvcCBhbmQgbmV3TGVmdFxuICAgICRwaWVjZS5jc3MoJ3RvcCcsIG5ld1RvcCk7XG4gICAgJHBpZWNlLmNzcygnbGVmdCcsIG5ld0xlZnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VXBCb2FyZCgpIHtcblxuICAgIC8vQ3JlYXRpbmcgdGhlIDY0IHNxdWFyZXMgYW5kIGFkZGluZyB0aGVtIHRvIHRoZSBET01cbiAgICBjb25zdCBzcXVhcmVDb3VudCA9IDgqODsgLy84IHJvd3MgYnkgOCBjb2x1bW5zOyB6ZXJvIGJhc2VkIGluZGV4XG4gICAgZm9yIChsZXQgaSA9IDA7aTxzcXVhcmVDb3VudDtpKyspIHtcbiAgICAvL3RoaXMgbGluZSBjcmVhdGVzIGEgbmV3IGRpdiB3aXRoIHRoZSBjbGFzcyAnc3F1YXJlJ1xuICAgIC8vYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGRpdiB3aXRoIGlkICdib2FyZCdcbiAgICAgICRib2FyZC5hcHBlbmQoJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3NxdWFyZScpKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0aW5nIHRoZSAyNCBwaWVjZXMgYW5kIGFkZGluZyB0aGVtIHRvIHRoZSBET01cbiAgICBjb25zdCBwaWVjZUNvdW50ID0gMjQ7XG5cbiAgICBmb3IgKGxldCBpPTA7aTxwaWVjZUNvdW50O2krKykge1xuICAgICAgLy90aGlzIGxpbmUgYXBwZW5kcyBhbiBlbXB0eSBkaXYgd2l0aCB0aGUgY2xhc3MgJ3BpZWNlJyB0byB0aGUgZGl2IHdpdGggaWQgJ3BpZWNlcydcbiAgICAgICRwaWVjZXMuYXBwZW5kKCQoJzxkaXYvPicpLmFkZENsYXNzKCdwaWVjZScpKTtcbiAgICB9XG4gICAgICAvL2l0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGRpdnMgd2l0aCBjbGFzcyBgc3F1YXJlYFxuICAgICAgLy9maWd1cmUgb3V0IHdoZXRoZXIgZWFjaCBvbmUgc2hvdWxkIGJlXG4gICAgICAvL2xpZ2h0IG9yIGRhcmssIGFuZCBhc3NpZ24gdGhlIHByb3BlciBjbGFzc1xuICAgIGNvbnN0ICRlYWNoU3F1YXJlID0gJCgnZGl2LnNxdWFyZScpO1xuICAgICRlYWNoU3F1YXJlLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgaWYobGlnaHRPckRhcmsoaW5kZXgpPT09IDApe1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaWdodCcpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2RhcmsnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIC8vaW5uZXIgaGVscGVyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBudW1iZXIgYmV0d2VlblxuICAgICAgLy8wIGFuZCA2MyAoaW5jbHVzaXZlKSBhbmQgcmV0dXJucyAxIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlXG4gICAgICAvL2RhcmssIGFuZCAwIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlIGxpZ2h0XG4gICAgZnVuY3Rpb24gbGlnaHRPckRhcmsoaW5kZXgpIHtcbiAgICAgIGNvbnN0IHggPSBpbmRleCAlIDg7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgY29uc3Qgb2RkWCA9IHggJSAyO1xuICAgICAgY29uc3Qgb2RkWSA9IHkgJSAyO1xuICAgICAgcmV0dXJuIChvZGRYIF4gb2RkWSk7XG4gICAgfVxuXG4gIH0vL2VuZCBvZiBzZXRVcEJvYXJkKClcblxuICBmdW5jdGlvbiB0b2dnbGVTZWxlY3QoJHBpZWNlKSB7XG4gICAgICAvL2lmICRwaWVjZSBoYXMgdGhlIGNsYXNzICdzZWxlY3RlZCcscmVtb3ZlIGl0XG4gICAgICAvL2lmICRwaWVjZSBkb2VzIG5vdCBoYXZlIHRoZSBjbGFzcyAnc2VsZWN0ZWQnXG4gICAgICAvL21ha2Ugc3VyZSBubyBvdGhlciBkaXZzIHdpdGggdGhlIGNsYXNzICdwaWVjZSdcbiAgICAgIC8vaGF2ZSB0aGF0IGNsYXNzLCB0aGVuIHNldCAkcGllY2UgdG8gaGF2ZSB0aGUgY2xhc3NcbiAgICBpZigkcGllY2UuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpXG4gICAgICAkcGllY2UucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgZWxzZSB7XG4gICAgICAkKCdkaXYucGllY2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG4gICAgICAgIGlmKCQocGllY2UpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICQocGllY2UpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG4gICAgICAkcGllY2UuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gIH0vL2VuZCBvZiB0b2dnbGVTZWxlY3QgZnVuY3Rpb25cblxuICBjb25zdCAkbW92ZUNvdW50ZXIgPSAkKCcjbW92ZUNvdW50ZXInKTtcbiAgZnVuY3Rpb24gaW5jcmVtZW50TW92ZUNvdW50ZXIoKSB7XG4gICAgICAvL2dldHMgdGhlIGh0bWwgb2YgdGhlIHNwYW4gd2l0aCBpZCBtb3ZlQ291bnRlciB0dXJucyBpdCBpbnRvIGEgbnVtYmVyXG4gICAgICAvL2luY3JlbWVudHMgaXQgYnkgb25lXG4gICAgICAvL3NldHMgdGhlIGh0bWwgb2YgdGhlIHNwYW4gd2l0aCBpZCBtb3ZlQ291bnRlclxuICAgICAgLy90byB0aGUgbmV3IG1vdmUgY291bnRcbiAgICAkbW92ZUNvdW50ZXIuaHRtbChwYXJzZUludCgkbW92ZUNvdW50ZXIuaHRtbCgpKSsxKTtcblxuICB9XG5cblxuICBwaWVjZVNlbGVjdCgpOy8vIHBsYXllciB0byBzZWxlY3QgYSBwaWVjZVxuICAvLyBQbGF5ZXIgY2hhbmdlIGZyb20gcGxheWVyIDEgdG8gcGxheWVyIDJcbiAgICAvL3RoaXMgZnVuY3Rpb24gYWxsb3dzIHRoZSBwbGF5ZXJzIHRvIGJlIGNoYW5nZWQuXG4gIGZ1bmN0aW9uIGluY3JlbWVudE1vdmVDb3VudChjb2xvcikge1xuICAgICAgLy9nZXRzIHRoZSBodG1sIG9mIHRoZSBzcGFuIHdpdGggaWQgbGlnaHRNb3ZlQ291bnQgb3IgZGFya01vdmVDb3VudFxuICAgICAgLy90dXJucyBpdCBpbnRvIGEgbnVtYmVyIGluY3JlbWVudHMgaXQgYnkgb25lXG4gICAgICAvL3NldHMgdGhlIGh0bWwgb2YgdGhlIHNwYW4gd2l0aCBpZCBsaWdodE1vdmVDb3VudCBvciBkYXJrTW92ZUNvdW50IHRvIHRoZSBuZXcgbW92ZSBjb3VudFxuICAgIGxldCB3aGljaENvdW50ZXIgPSAnJztcbiAgICBjb2xvciA9PT0gJ2xpZ2h0JyA/IHdoaWNoQ291bnRlciA9ICcjbGlnaHRNb3ZlQ291bnQnIDogd2hpY2hDb3VudGVyID0gJyNkYXJrTW92ZUNvdW50JztcbiAgICBsZXQgJG1vdmVzID0gcGFyc2VJbnQoJCh3aGljaENvdW50ZXIpLmh0bWwoKSk7XG4gICAgJG1vdmVzKys7XG5cbiAgICAkKHdoaWNoQ291bnRlcikuaHRtbCgkbW92ZXMpO1xuICAgIGNvbnNvbGUubG9nKCRtb3Zlcyk7XG4gICAgLy9pZiB0aGUgbnVtYmVyIGlzIGV2ZW4gdGhlbiBpdCdzIGxpZ2h0J3MgbW92ZSBhbmQgb2RkIGl0J3MgZGFyaydzIG1vdmUuXG4gICAgaWYgKCRtb3ZlcyAlIDIgID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSGVsbG8gb2RkIG51bWJlcmApO1xuICAgICAgY29uc29sZS5sb2coJGRhcmtQaWVjZXMpO1xuICAgIH0gZWxzZSBpZigkbW92ZXMgJSAyID09PSAwKXtcbiAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyBldmVuIG51bWJlcmApO1xuICAgICAgY29uc29sZS5sb2coJGxpZ2h0UGllY2VzKTtcbiAgICB9XG4gIH0vL2VuZCBvZiBpbmNyZW1lbnRNb3ZlQ291bnQoKVxuXG4gIC8vUExBWUVSIE9ORSBBTkQgUExBWUVSIFRXT1xuICAvL0lmIHRoZSBtb3ZlIGNvdW50IGlzIGV2ZW4sIHRoZW4gcGxheWVyIG9uZSdzIHR1cm4gb3RoZXJ3aXNlIHBsYXllciB0d28ncyB0dXJuXG4gIGNvbnN0ICRsaWdodFBpZWNlcyA9ICQoJ2Rpdi5waWVjZS5saWdodCcpO1xuICBjb25zdCAkZGFya1BpZWNlcyA9ICQoJ2Rpdi5waWVjZS5kYXJrJyk7XG5cbi8vIHRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgalF1ZXJ5IG9iamVjdCBzdG9yZWQgaW5cbi8vIHRoZSBkYXRhIG9iamVjdCBvZiAkc3F1YXJlIHVuZGVyIHRoZSBrZXkgJ2p1bXBlZFBpZWNlcydcbi8vIGFuZCByZW1vdmVzIGV2ZXJ5IGVsZW1lbnQgaW4gdGhhdCBqUXVlcnkgc2VsZWN0aW9uXG4gIGZ1bmN0aW9uIHJlbW92ZUNhcHR1cmVkUGllY2VzKCRzcXVhcmUpIHtcbiAgICAkc3F1YXJlLmRhdGEoJ2p1bXBlZFBpZWNlcycpLnJlbW92ZSgpO1xuICB9XG5cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSAkcGllY2UgYW5kIHRoZSBpbmRleCBvZiBhIHNxdWFyZVxuLy9zcXVhcmVJbmRleCB3aWxsIGJlIGJldHdlZW4gMCAtIDYzIChpbmNsdXNpdmUpLlxuLy8gaWYgdGhlIGluZGV4IHJlZmVycyB0byBhbiBlbGVtZW50IGluIHRoZSBmaXJzdCByb3cgb3IgbGFzdCByb3csXG4vLyB0aGUgY2xhc3MgJ2tpbmcnIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgJHBpZWNlXG4gIGZ1bmN0aW9uIGNoZWNrS2luZygkcGllY2Usc3F1YXJlSW5kZXgpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKyl7XG4gICAgICBpZiAoc3F1YXJlSW5kZXggPCA4IHx8IHNxdWFyZUluZGV4ID49IDU2KXtcbiAgICAgICAgJHBpZWNlLmFkZENsYXNzKCdraW5nJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi8vIFdJTk5JTkdcbi8vd2lubmluZyBjb25kaXRpb25zOiBJZiBvbmUgcGxheWVyIG9ubHkgaGFzIHRoZWlyIHBpZWNlcyBvbiB0aGUgYm9hcmQgbGVmdFxuLy90aGV5IHdpbi5cbiAgZnVuY3Rpb24gcGllY2VzTGVmdCgpe1xuICAgIGNvbnN0IGRhcmtQaWVjZXMgPSAkZGFya1BpZWNlcy5sZW5ndGg7XG4gICAgY29uc3QgbGlnaHRQaWVjZXMgPSAkbGlnaHRQaWVjZXMubGVuZ3RoO1xuICAgIGlmIChkYXJrUGllY2VzID09PSAwKSB7XG4gICAgICAkd2lubmVyLnRleHQoYFBsYXllciAxIFdpbnNgKTtcbiAgICAgIHJldHVybiAkd2lubmVyLnNsaWRlRG93bihgUGxheWVyIDEgV2luc2ApO1xuICAgIH0gZWxzZSBpZihsaWdodFBpZWNlcyA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coYFBsYXllciAyIHdpbnNgKTtcbiAgICAgIHJldHVybiAkd2lubmVyLnRleHQoYFBsYXllciAyIFdpbnNgKTtcblxuICAgIH0gZWxzZSBpZiAobGlnaHRQaWVjZXMgPT09IDEgJiYgZGFya1BpZWNlcyA9PT0gMSl7Ly9hbmQgNDAgbW92ZXMgYXJlIHBsYXllZCBhZnRlcndhcmRzXG4gICAgICAvL3lldCB0byBjb2RlIHRoaXMgZnVuY3Rpb25cbiAgICAgIGNvbnNvbGUubG9nKGBJdCdzIGEgZHJhd2ApO1xuICAgICAgcmV0dXJuICR3aW5uZXIudGV4dChgSXQncyBhIGRyYXdgKTtcbiAgICB9XG4gIH1cblxuICAvL3RoaXMgcmVzZXRzIHRoZSBnYW1lIGJ5IGVmZmVjdGl2ZWx5IHJlbG9hZGluZyB0aGUgcGFnZSBmcm9tIGNhY2hlXG4gIGZ1bmN0aW9uIHJlc2V0KCl7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxufSk7Ly9lbmQgb2YgSlMgbG9hZFxuXG5cbi8qXG5cblRPRE86XG4xLiBQbGF5ZXIgY2hhbmdlIGZyb20gcGxheWVyIDEgdG8gcGxheWVyIDIgZmVhdHVyZSByZXF1ZXN0XG4yLiBSZXNldCB0aGUgZ2FtZSBieSBwdXR0aW5nIHRoZSBwaWVjZXMgdG8gdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGZlYXR1cmUgcmVxdWVzdGZcbjMuIFdpbiBjb25kaXRpb25zLCBpZiBlaXRoZXIgcGxheWVyIGhhcyBwaWVjZXMgbGVmdCBvbiB0aGUgYm9hcmQgd2hpbGUgdGhlIG90aGVyIGRvZXNuJ3RcbiAgdGhlbiBpdCdzIGEgd2luLlxuNC4gQ291bGQgZG8gbW9yZSBzdHlsaW5nIHRvIG1ha2UgdGhlIGdhbWUgaGF2ZSBhIHNtb290aGVyIGZlZWwuIChiaXQgdmFndWUpXG41LiBSZWZhY3RvciBteSBjb2RlLlxuKi9cbiJdfQ==
