"use strict";$(function(){function e(){var e=$(event.target).position();return C=i(e.top,e.left)}function a(){$("div.square").removeData("jumpedPieces").removeClass("movable")}function t(e,a){return{top:a*(v+f)+"px",left:e*(v+f)+"px"}}function i(e,a){return{x:a/(v+f),y:e/(v+f)}}function s(e){var a=$("div.square"),t={};$("div.piece").each(function(e,a){var s=$(a).position(),n=i(s.top,s.left),o=8*n.y+n.x;t[o]=$(a)});var s=i(e.position().top,e.position().left),n=[{x:1,y:1},{x:-1,y:1}],o=[{x:1,y:-1},{x:-1,y:-1}],r=n.concat(o),l=void 0;l=e.hasClass("king")?r:e.hasClass("light")?n:o;var c=function(e){return!(e.x>=0&&e.x<8&&e.y>=0&&e.y<8)},d=$();return function i(s,n,o){if(!c(s)){var r=a.eq(8*s.y+s.x);$.each(n,function(n,l){var v={x:l.x+s.x,y:l.y+s.y};if(!c(v)){var f=8*v.y+v.x;if(t[f]){if(e.hasClass("dark")){if(t[f].hasClass("dark"))return}else if(t[f].hasClass("light"))return;var u={x:2*l.x+s.x,y:2*l.y+s.y};if(c(u))return;var p=8*u.y+u.x;if(!t[p]){var h=a.eq(p);if(!h.is(d)){d=d.add(h);var C=t[f];r.data("jumpedPieces")&&(C=C.add(r.data("jumpedPieces"))),h.data("jumpedPieces",C),i(u,l,!0)}}}else if(!o){var m=a.eq(f);m.data("jumpedPieces",$()),d=d.add(m)}}})}}(s,l,!1),d}function n(e,a,t){e.css("top",a),e.css("left",t)}function o(e){e.hasClass("selected")?e.removeClass("selected"):($("div.piece").each(function(e,a){$(a).hasClass("selected")&&$(a).removeClass("selected")}),e.addClass("selected"))}function r(){$("#moveCounter").html(parseInt($("#moveCounter").html(),10)+1)}function l(e){e.data("jumpedPieces").remove()}function c(e,a){for(var t=0;t<64;t++)(a<8||a>=56)&&e.addClass("king")}function d(){location.reload()}for(var v=46,f=2,u=$("div#board"),p=$("div#pieces"),h=$("#reset-button"),C=null,m=0;m<64;m++)u.append($("<div/>").addClass("square"));!function(){function e(e){return e%8%2^Math.floor(e/8)%2}$("div.square").each(function(a){0===e(a)?$(this).addClass("light"):$(this).addClass("dark")})}();for(var x=0;x<24;x++)p.append($("<div/>").addClass("piece"));!function(){$("piece"),$("div.piece:even").addClass("light"),$("div.piece:odd").addClass("dark")}(),function(){$("div.piece.dark").each(function(e,a){var i=Math.floor(e/4)+5,s=e%4*2+(1-i%2),o=t(s,i);n($(a),o.top,o.left)})}(),function(){var e=$("div.piece.light");e.each(function(a,i){console.log(e.length);var s=Math.floor(a/4),o=a%4*2+(1-s%2),r=t(o,s);n($(i),r.top,r.left)})}(),h.on("click",function(){d()}),$("div.piece").on("click",function(e){var t=$(e.target);o(t),a(),t.hasClass("selected")&&s(t).addClass("movable")}),$("div.square").on("click",function(i){e();var s=$(i.target);if(s.hasClass("movable")){var o=$("div.piece.selected");if(1===o.length){var d=s.prevAll().length,v=d%8,f=Math.floor(d/8),u=t(v,f);n(o,u.top,u.left),l(s),c(o,s.prevAll().length),r(),o.removeClass("selected"),$("div.square").removeClass("movable"),a()}}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29vcmRzIiwicG9zaXRpb24iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRQb3NpdGlvbiIsImdldENvb3JkcyIsInRvcCIsImxlZnQiLCJyZXNldE1vdmFibGVzIiwicmVtb3ZlRGF0YSIsInJlbW92ZUNsYXNzIiwiZ2V0UGl4ZWxzIiwieCIsInkiLCJ3aWR0aCIsImJvcmRlciIsImdldE1vdmFibGVTcXVhcmVzIiwiJHBpZWNlIiwic3F1YXJlSW5kZXgiLCJ0YWtlblNxdWFyZXMiLCJlYWNoIiwiaW5kZXgiLCJwaWVjZSIsImRhcmtEaXJlY3Rpb24iLCJraW5nRGlyZWN0aW9uIiwibGlnaHREaXJlY3Rpb24iLCJjb25jYXQiLCJkaXJlY3Rpb24iLCJvdXRPZkJvdW5kcyIsIm5ld0Nvb3JkcyIsIm5ld1NxdWFyZUluZGV4IiwiJGxlZ2FsU3F1YXJlcyIsImhhc0NsYXNzIiwiYnVpbGRNb3ZlcyIsImp1bXBzT25seSIsIiRjdXJyZW50U3F1YXJlIiwianVtcENvb3JkcyIsImp1bXBTcXVhcmVJbmRleCIsImlzIiwiJGp1bXBlZFBpZWNlcyIsIiRuZXdTcXVhcmUiLCIkc3F1YXJlcyIsImVxIiwiYWRkIiwiZGF0YSIsInNldFVwUGllY2VzIiwiYWRkQ2xhc3MiLCJjc3MiLCJtb3ZlUGllY2VUbyIsIm5ld1RvcCIsIm5ld0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJ0b2dnbGVTZWxlY3QiLCJpIiwiaW5jcmVtZW50bW92ZUNvdW50ZXIiLCIkbGlnaHRQaWVjZXMiLCJsZW5ndGgiLCJodG1sIiwicmVtb3ZlQ2FwdHVyZWRQaWVjZXMiLCIkc3F1YXJlIiwicmVtb3ZlIiwiY2hlY2tLaW5nIiwicmVzZXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNxdWFyZUNvdW50IiwiJGJvYXJkIiwiJHBpZWNlcyIsImFwcGVuZCIsImxpZ2h0T3JEYXJrIiwidGhpcyIsIiRkYXJrUGllY2VzIiwicGl4ZWxQb3NpdGlvbiIsImNvbnNvbGUiLCJvbiIsIiR0aGlzUGllY2UiLCJlIiwiJHBpZWNlVG9Nb3ZlIiwiJHNlbGVjdGVkUGllY2UiLCJwcmV2QWxsIiwicGl4ZWxzIl0sIm1hcHBpbmdzIjoiWUFDQUEsR0FBRSxXQTJHRSxRQUFPQyxLQUVSLEdBQUFDLEdBQUFGLEVBQUFHLE1BQUFDLFFBQUFGLFVBR0NHLE9BUEFKLEdBQVNLLEVBQVVKLEVBQVNLLElBQUlMLEVBQVNNLE1BOEQzQyxRQUFBQyxLQUNBVCxFQUFBLGNBQUFVLFdBQUEsZ0JBQUFDLFlBQUEsV0FVQSxRQUFBQyxHQUFBQyxFQUFBQyxHQUdBLE9BQ0lQLElBQUFPLEdBQUFDLEVBQUFDLEdBQUEsS0FDQVIsS0FBQUssR0FBQUUsRUFBQUMsR0FBQSxNQVNKLFFBQUFWLEdBQUFDLEVBQUFDLEdBR0EsT0FWSUssRUFBS0wsR0FBUU8sRUFBUUMsR0FZdkJGLEVBQUFQLEdBQUFRLEVBQUFDLElBU1EsUUFBQUMsR0FBQUMsR0FHTixHQUFNQyxHQUFBQSxFQUFBQSxjQU5KQyxJQVlKcEIsR0FBQSxhQUFBcUIsS0FBQSxTQUFBQyxFQUFBQyxHQU1BLEdBQU1DLEdBQUFBLEVBQ0ZELEdBQUFyQixXQUdKRCxFQUFBSyxFQUFBSixFQUFBSyxJQUFBTCxFQUFBTSxNQUNNaUIsRUFBZ0JDLEVBQUFBLEVBQUFBLEVBQWVDLEVBQU9ILENBaEIxQ0osR0FBYUQsR0FBZW5CLEVBQUV1QixJQW9COUJLLElBQUFBLEdBQVlILEVBQUFBLEVBQVp2QixXQUFBSyxJQUFBVyxFQUFBaEIsV0FBQU0sTUFDS2tCLElBR0xFLEVBQUFBLEVBQUFBLEVBQUFBLElBQ0RmLEdBQUEsRUFBQUMsRUFBQSxJQUdDVSxJQURGWCxFQUFBLEVBQUFDLEdBQUEsSUFkS0QsR0FBSSxFQUFFQyxHQUFJLElBb0JUZSxFQUFZNUIsRUFBUzBCLE9BQUFILEdBRXpCSSxNQUFBQSxFQWZBQSxHQWdCRVAsRUFBS08sU0FBVSxRQWhCTEgsRUFrQkpLLEVBQUFBLFNBQVksU0FDYkYsRUFETEosQ0FNQSxJQUFBSyxHQUFNRSxTQUFtQkQsR0FDckIsUUFBQTdCLEVBQUFZLEdBQUEsR0FBQVosRUFBQVksRUFBQSxHQUFBWixFQUFBYSxHQUFBLEdBQUFiLEVBQUFhLEVBQUEsSUFHSWtCLEVBQUFoQyxHQWdFWmtCLE9BL0RpQmUsU0FBWEMsR0FBb0JqQyxFQUFTMkIsRUFBQU8sR0FDM0IsSUFBQU4sRUFBSVQsR0FBSixDQUVBLEdBQUFnQixHQUFpQkwsRUFBQUEsR0FBZ0JFLEVBQWhCRixFQUFnQkUsRUFBU2hDLEVBQXRDWSxFQUNMYixHQUFBcUIsS0FBQU8sRUFBQSxTQUFBTixFQUFBTSxHQUVELEdBQU1TLElBQ0p4QixFQUFBQSxFQUFHZSxFQUFBM0IsRUFBZ0JBLEVBQ25CYSxFQUFBQSxFQUFHYyxFQUFBM0IsRUFBZ0JBLEVBZHZCLEtBQUk0QixFQUFZQyxHQUFoQixDQWtCRSxHQUFNUSxHQUFBQSxFQUFrQkQsRUFBV3ZCLEVBQUVnQixFQUFJTyxDQUVuQyxJQUFBakIsRUFBQVcsR0FBQSxDQUdJLEdBQUFiLEVBQUFlLFNBQUEsU0FDUixHQUFJYixFQUFZbUIsR0FBaEJOLFNBQW1DLFFBQUEsV0FFdkIsSUFBQWIsRUFBQVcsR0FBQUUsU0FBQSxTQUFBLE1BR0EsSUFBQUksSUFDVnhCLEVBQUkyQixFQUFKWixFQUFJWSxFQUFBQSxFQUFnQnBCLEVBQ3BCTixFQUFJc0IsRUFBSlIsRUFBSVEsRUFBQUEsRUFBb0J0QixFQUV2QixJQUFBZSxFQUFBUSxHQUFBLE1BZkwsSUFBTUMsR0FBK0IsRUFBYkQsRUFBV3ZCLEVBQU11QixFQUFXeEIsQ0FvQmpELEtBQUFPLEVBQUFrQixHQUFBLENBQ0YsR0FBQUcsR0FBQUMsRUFBQUMsR0FBQUwsRUFFRCxLQUFNRyxFQUFhQyxHQUFBQSxHQUFZWCxDQUdoQ0MsRUFBQUEsRUFBQVksSUFBQUgsRUFJTFAsSUFBV2pDLEdBQWlCbUIsRUFBNUJXLEVBQ09DLEdBQVBhLEtBQUEsa0JBRURMLEVBQUFBLEVBQUFJLElBQUFSLEVBQUFTLEtBQUEsa0JBRVFDLEVBQWNELEtBQUEsZUFBQUwsR0FHekJOLEVBQUFHLEVBQUFULEdBQUEsU0FHQSxLQUFBTyxFQUFBLENBQ00sR0FBQU0sR0FBaUJNLEVBQW5CSixHQUFBWixFQUVEVSxHQUFBSSxLQUFBLGVBQUE3QyxLQW5CT2dDLEVBQWdCQSxFQUFjWSxJQUFJSCxTQXlCdEN4QyxFQUFBMkIsR0FBQSxHQUNLb0IsRUFpQkwsUUFBQUMsR0FBQS9CLEVBQUFnQyxFQUFBQyxHQUlBakMsRUFBTUwsSUFBSVMsTUFBUTRCLEdBQ2xCaEMsRUFBTUosSUFBSXNDLE9BQUtDLEdBa0NyQixRQUFBQyxHQUFBcEMsR0FLR0EsRUFBQWUsU0FBQSxZQXpCR2YsRUFBT1AsWUFBWSxhQTRCdkJYLEVBQUEsYUFBQXFCLEtBQUEsU0FBQUMsRUFBQUMsR0FDRnZCLEVBQUF1QixHQUFBVSxTQUFBLGFBQ0FqQyxFQUFBdUIsR0FBQVosWUFBQSxjQUVJTyxFQUFRcUMsU0FBT0EsYUFLaEIsUUFBQUMsS0FNQ3hELEVBQUEsZ0JBQW9CeUQsS0FBQUEsU0FBYUMsRUFBQUEsZ0JBQWpDQyxPQUFBLElBQUEsR0FNRSxRQUFBQyxHQUFPQyxHQUNSQSxFQUFBaEIsS0FBQSxnQkFBQWlCLFNBeFpMLFFBcWFHQyxHQUFBN0MsRUFBQUMsR0EvQkMsSUFBSSxHQUFJb0MsR0FBSSxFQUFHQSxFQUFJLEdBQUlBLEtBQ2pCcEMsRUFBYyxHQUFLQSxHQUFlLEtBaUM1Q0QsRUFBQTZCLFNBQUEsUUFaRSxRQUFTaUIsS0FDUEMsU0FBU0MsU0FoWlgsSUFBTUMsR0FWQXBELEdBQVEsR0FEZEMsRUFBQSxFQUNNRCxFQUFOZixFQUFBLGFBQ01nQixFQUFOaEIsRUFBQSxjQUNNb0UsRUFBV3BFLEVBQUEsaUJBQ1hxRSxFQUFBQSxLQU9BRixFQUFBQSxFQUFBQSxFQUROLEdBQ3lCWixJQUl6QmEsRUFBQUUsT0FBQXRFLEVBQUEsVUFBQStDLFNBQUEsWUEyVUcsV0FORCxRQUFTd0IsR0FBWWpELEdBK0JuQixNQUpLa0MsR0FBQUEsRUFFTCxFQURBSixLQUFBQyxNQUFBL0IsRUFBQSxHQUVBLEVBbkJBdEIsRUFBQSxjQUNBcUIsS0FBQSxTQUFBQyxHQUNBLElBQUFpRCxFQUFBakQsR0FDQXRCLEVBQUF3RSxNQUFBekIsU0FBQSxTQUlFL0MsRUFBQXdFLE1BQUF6QixTQUFGLFlBNVVKLEtBQUssR0FBSVEsR0FBRSxFQUFFQSxFQUFBQSxHQUFhQSxJQUt6QmMsRUFBQUMsT0FBQXRFLEVBQUEsVUFBQStDLFNBQUEsV0FzU0QsV0FFSS9DLEVBQUEsU0FFRkEsRUFBQSxrQkFBc0IrQyxTQUFBLFNBR2xCL0MsRUFBQUEsaUJBQVErQyxTQUFSLFdBM1FKMEIsV0FDSXpFLEVBQUEsa0JBRVFvRCxLQUFLQyxTQUFNL0IsRUFBWEMsR0FHUixHQUFBVCxHQUFBc0MsS0FBQUMsTUFBQS9CLEVBQUEsR0FBQSxFQUNJb0QsRUFBQUEsRUFBQUEsRUFBZ0I5RCxHQUFBQSxFQUFBRSxFQUFZQSxHQVBwQzRELEVBQUE5RCxFQUFBQyxFQUFBQyxFQVNFbUMsR0FBWWpELEVBQUV1QixHQUFPbUQsRUFBY25FLElBQUltRSxFQUFjbEUsV0E5QnZEaUQsV0FDRSxHQUFBQSxHQUFBekQsRUFBQSxrQkFFQXlELEdBQUFwQyxLQUFBLFNBQUFDLEVBQUFDLEdBRUFvRCxRQUFVdkIsSUFBQUEsRUFBVzlCLE9BR3JCLElBQUFSLEdBQUFzQyxLQUFBQyxNQUFBL0IsRUFBQSxHQUNNb0QsRUFBQUEsRUFBQUEsRUFBZ0I5RCxHQUFBQSxFQUFZRSxFQUFsQyxHQVRGNEQsRUFBQTlELEVBQUFDLEVBQUFDLEVBV0VtQyxHQUFZakQsRUFBRXVCLEdBQU9tRCxFQUFjbkUsSUFBSW1FLEVBQWNsRSxXQWdDekRSLEVBQUE0RSxHQUFlQSxRQUFmLFdBQ0VaLE1BR0FoRSxFQUFBLGFBQUE0RSxHQUFBLFFBQUEsU0FBQXpFLEdBRUFNLEdBQUFBLEdBQUFBLEVBQUFBLEVBQUFBLE9BR0VRLEdBQUFBLEdBQ0RSLElBRkdvRSxFQUFXNUMsU0FBUyxhQUsxQmhCLEVBQUE0RCxHQUFBOUIsU0FBQSxhQVNBL0MsRUFBRSxjQUFjNEUsR0FBRyxRQUFTLFNBQUNFLEdBTzNCekUsR0FHTSxJQUFBMEUsR0FBQS9FLEVBQUE4RSxFQUFBMUUsT0FJSixJQUFBMkUsRUFBSUMsU0FBZXRCLFdBQWMsQ0FHL0IsR0FBTXBDLEdBQVF5RCxFQUFBQSxxQkFHZCxJQUFBLElBQUFDLEVBQWVwRSxPQUFmLENBR0UsR0FBQVUsR0FBQXlELEVBQUFFLFVBQUF2QixPQUNGRSxFQUFBQSxFQUFBQSxFQUNBOUMsRUFBQXNDLEtBQUFDLE1BQUEvQixFQUFBLEdBQ0E0RCxFQUFBdEUsRUFBQUMsRUFBQUMsRUFFSW1DLEdBQUErQixFQUFBRSxFQUFBM0UsSUFBQTJFLEVBQUExRSxNQUVBb0QsRUFBQW1CLEdBR0FoQixFQUFBaUIsRUFBQUQsRUFBQUUsVUFBQXZCLFFBRUpqRCxJQUVEdUUsRUFBQXJFLFlBQUEsWUFIQ1gsRUFBRSxjQUFjVyxZQUFZLFdBVWxDRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2xvYWRpbmcgSlNcbiQoKCk9PntcblxuICAvL0dMT0JBTCBWQVJJQUJMRVNcbiAgY29uc3Qgd2lkdGggPSA0NjtcbiAgY29uc3QgYm9yZGVyID0gMjtcbiAgY29uc3QgJGJvYXJkID0gJCgnZGl2I2JvYXJkJyk7XG4gIGNvbnN0ICRwaWVjZXMgPSAkKCdkaXYjcGllY2VzJyk7XG4gIGNvbnN0ICRyZXNldEJ1dHRvbiA9ICQoJyNyZXNldC1idXR0b24nKTtcbiAgbGV0IGNvb3JkcyA9IG51bGw7Ly9zZXR0aW5nIGNvb3JkcyBnbG9iYWxseSBzbyBpdCdzIGNvbnN0YW50bHkgdXBkYXRpbmdcblxuXG5cbiAgLy9DcmVhdGluZyB0aGUgNjQgc3F1YXJlcyBhbmQgYWRkaW5nIHRoZW0gdG8gdGhlIERPTVxuICBjb25zdCBzcXVhcmVDb3VudCA9IDgqODsgLy84IHJvd3MgYnkgOCBjb2x1bW5zOyB6ZXJvIGJhc2VkIGluZGV4XG4gIGZvciAobGV0IGkgPSAwO2k8c3F1YXJlQ291bnQ7aSsrKSB7XG5cbiAgLy90aGlzIGxpbmUgY3JlYXRlcyBhIG5ldyBkaXYgd2l0aCB0aGUgY2xhc3MgJ3NxdWFyZSdcbiAgLy9hbmQgYXBwZW5kcyBpdCB0byB0aGUgZGl2IHdpdGggaWQgJ2JvYXJkJ1xuICAgICRib2FyZC5hcHBlbmQoJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3NxdWFyZScpKTtcbiAgfVxuXG5cbiAgLy9zZXQgdXAgdGhlIGJvYXJkIHdpdGggdGhlIGNvcnJlY3QgY2xhc3NlcyBmb3IgdGhlIGxpZ2h0IGFuZCBkYXJrIHNxdWFyZXNcbiAgc2V0VXBCb2FyZCgpO1xuXG5cbiAgICAgIC8vY3JlYXRpbmcgdGhlIDI0IHBpZWNlcyBhbmQgYWRkaW5nIHRoZW0gdG8gdGhlIERPTVxuICBjb25zdCBwaWVjZUNvdW50ID0gMjQ7XG4gIGZvciAobGV0IGk9MDtpPHBpZWNlQ291bnQ7aSsrKSB7XG5cbiAgICAvL3RoaXMgbGluZSBhcHBlbmRzIGFuIGVtcHR5IGRpdiB3aXRoIHRoZSBjbGFzcyAncGllY2UnIHRvIHRoZSBkaXYgd2l0aCBpZCAncGllY2VzJ1xuICAgICRwaWVjZXMuYXBwZW5kKCQoJzxkaXYvPicpLmFkZENsYXNzKCdwaWVjZScpKTtcblxuICB9XG5cblxuICAvL3NldHMgdXAgdGhlIGNsYXNzZXMgZm9yIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgcGllY2VcbiAgc2V0VXBQaWVjZXMoKTtcbiAgZGFya1BpZWNlcygpO1xuICAvL3NldHRpbmcgdXAgdGhlIGRhcmtQaWVjZXNcbiAgLy9MSUdIVCBQSUVDRVNcbiAgbGlnaHRQaWVjZXMoKTtcbiAgLy8gc2V0dGluZyB1cCB0aGUgbGlnaHRQaWVjZXNcbiAgZnVuY3Rpb24gbGlnaHRQaWVjZXMoKXtcbiAgICBjb25zdCAkbGlnaHRQaWVjZXMgPSAkKCdkaXYucGllY2UubGlnaHQnKTtcbiAgICAvL3RoaXMgbG9vcCBtb3ZlcyBhbGwgdGhlIGxpZ2h0IHBpZWNlcyB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xuICAgICRsaWdodFBpZWNlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG4gICAgICAvLyBURVNUIGNoZWNraW5nIHRoZSBsZW5ndGhcbiAgICAgIGNvbnNvbGUubG9nKCRsaWdodFBpZWNlcy5sZW5ndGgpO1xuICAgICAgLy90dXJuaW5nIHRoZSBpbmRleCAoZnJvbSAwIC0gMTEpXG4gICAgICAvL2ludG8gYSB4LHkgc3F1YXJlIGNvb3JkaW5hdGUgdXNpbmcgbWF0aFxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyA0KTtcbiAgICAgIGNvbnN0IHggPSAoaW5kZXggJSA0KSAqIDIgKyAoMSAtIHklMik7XG5cbiAgICAgIC8vdHVybmluZyB0aGUgeCx5IGNvb3JkaW5hdGUgaW50byBhIHBpeGVsIHBvc2l0aW9uXG4gICAgICBjb25zdCBwaXhlbFBvc2l0aW9uID0gZ2V0UGl4ZWxzKHgseSk7XG4gICAgICAvL2FjdHVhbGx5IG1vdmluZyB0aGUgcGllY2UgdG8gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIG1vdmVQaWVjZVRvKCQocGllY2UpLHBpeGVsUG9zaXRpb24udG9wLHBpeGVsUG9zaXRpb24ubGVmdCk7XG4gICAgfSk7XG4gIH0vL2VuZCBvZiBsaWdodFBpZWNlcyBmdW5jdGlvblxuXG5cbiAgLy9EQVJLIFBJRUNFU1xuXG4gIGZ1bmN0aW9uIGRhcmtQaWVjZXMoKXtcbiAgICBjb25zdCAkZGFya1BpZWNlcyA9ICAgJCgnZGl2LnBpZWNlLmRhcmsnKTtcbiAgICAgICAgLy90aGlzIGxvb3AgbW92ZXMgYWxsIHRoZSBkYXJrIHBpZWNlcyB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xuICAgICRkYXJrUGllY2VzLmVhY2goZnVuY3Rpb24oaW5kZXgscGllY2UpIHtcbiAgICAgICAgLy90dXJuaW5nIHRoZSBpbmRleCAoZnJvbSAwIC0gMTEpXG4gICAgICAgIC8vaW50byBhIHgseSBzcXVhcmUgY29vcmRpbmF0ZSB1c2luZyBtYXRoXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleC80KSArIDU7XG4gICAgICBjb25zdCB4ID0gKGluZGV4ICUgNCkgKiAyICsgKDEteSUyKTtcblxuICAgICAgICAvL3R1cm5pbmcgdGhlIHgseSBjb29yZGluYXRlIGludG8gYSBwaXhlbCBwb3NpdGlvblxuICAgICAgY29uc3QgcGl4ZWxQb3NpdGlvbiA9IGdldFBpeGVscyh4LHkpO1xuICAgICAgICAvL21vdmluZyB0aGUgcGllY2UgdG8gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIG1vdmVQaWVjZVRvKCQocGllY2UpLHBpeGVsUG9zaXRpb24udG9wLHBpeGVsUG9zaXRpb24ubGVmdCk7XG4gICAgfSk7XG4gIH0vL2VuZCBvZiBkYXJrUGllY2VzIGZ1bmN0aW9uXG5cblxuXG4gIC8vRVZFTlRTXG5cbiAgICAvL3Jlc2V0dGluZyB0aGUgZ2FtZS5cbiAgJHJlc2V0QnV0dG9uLm9uKCdjbGljaycsICgpPT57XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgJCgnZGl2LnBpZWNlJykub24oJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgLy90dXJuIGB0aGlzYCBpbnRvIGEgalF1ZXJ5IG9iamVjdFxuICAgIGNvbnN0ICR0aGlzUGllY2UgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgLy90b2dnbGluZyB0aGUgJ3NlbGVjdGVkJyBjbGFzcyBvZiB0aGlzIHBpZWNlXG4gICAgLy9hbmQgcG9zc2libGUgZGVzZWxlY3Rpbmcgb3RoZXIgcGllY2VzXG4gICAgdG9nZ2xlU2VsZWN0KCR0aGlzUGllY2UpO1xuICAgIHJlc2V0TW92YWJsZXMoKTtcbiAgICAvL2dldCB0aGUgbGVnYWwgbW92ZXMgZm9yIHRoaXNcbiAgICBpZiAoJHRoaXNQaWVjZS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgZ2V0TW92YWJsZVNxdWFyZXMoJHRoaXNQaWVjZSkuYWRkQ2xhc3MoJ21vdmFibGUnKTtcbiAgICB9XG4gIH0pOy8vZW5kIG9mIHBpZWNlIGNsaWNrIGV2ZW50XG5cbiAgLy9jaGVja3MgdGhlIGN1cnJlbnRQb3NpdGlvbiBvZiB0aGUgY2xpY2tlZCBvciBzZWxlY3RlZCBkaXYgYW5kIHJldHVybnMgdGhlIGNvb3Jkcy5cbiAgZnVuY3Rpb24gY3VycmVudFBvc2l0aW9uKCl7XG4gICAgY29uc3QgcG9zaXRpb24gPSAkKGV2ZW50LnRhcmdldCkucG9zaXRpb24oKTtcbiAgICBjb29yZHMgPSBnZXRDb29yZHMocG9zaXRpb24udG9wLHBvc2l0aW9uLmxlZnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkcyk7Ly9nZXR0aW5nIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGllY2VcbiAgICByZXR1cm4gY29vcmRzO1xuXG4gIH1cblxuICAkKCdkaXYuc3F1YXJlJykub24oJ2NsaWNrJywgKGUpPT57XG4gICAgY3VycmVudFBvc2l0aW9uKCk7Ly90aGUgY3VycmVudFBvc2l0aW9uIG9mIHRoZSBzcXVhcmU7IGNvb3Jkc1xuICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZHMnLCBjb29yZHMpO1xuICAgIC8vdHVybiBgZSBvciBldmVudGAgaW50byBhIGpRdWVyeSBvYmplY3RcbiAgICBjb25zdCAkcGllY2VUb01vdmUgPSAkKGUudGFyZ2V0KTtcblxuXG4gICAgLy9pZiAkKHRoaXMpIGlzIGEgbGVnYWwgc3F1YXJlIHRvIG1vdmUgdG8uLi5cbiAgICBpZiAoJHBpZWNlVG9Nb3ZlLmhhc0NsYXNzKCdtb3ZhYmxlJykpIHtcblxuICAgICAgICAgIC8vZ2V0IHRoZSBwaWVjZSB3aXRoIHRoZSBjbGFzcyAnc2VsZWN0ZWQnXG4gICAgICBjb25zdCAkc2VsZWN0ZWRQaWVjZSA9ICQoJ2Rpdi5waWVjZS5zZWxlY3RlZCcpO1xuXG4gICAgICAgICAgLy9vbmx5IG1vdmUgaWYgdGhlcmUgaXMgZXhhY3RseSBvbmUgc2VsZWN0ZWQgcGllY2VcbiAgICAgIGlmICgkc2VsZWN0ZWRQaWVjZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBpbmRleCBvZiB0aGUgc3F1YXJlXG4gICAgICAgICAgICAvL2FuZCB0cmFuc2xhdGUgaXQgdG8gcGl4ZWwgcG9zaXRpb25cbiAgICAgICAgY29uc3QgaW5kZXggPSAkcGllY2VUb01vdmUucHJldkFsbCgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgeCA9IGluZGV4ICUgODtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcbiAgICAgICAgY29uc3QgcGl4ZWxzID0gZ2V0UGl4ZWxzKHgseSk7XG4gICAgICAgICAgICAvL2FjdHVhbGx5IGRvIHRoZSBtb3ZpbmdcbiAgICAgICAgbW92ZVBpZWNlVG8oJHNlbGVjdGVkUGllY2UscGl4ZWxzLnRvcCxwaXhlbHMubGVmdCk7XG4gICAgICAgICAgLy9yZW1vdmVDYXB0dXJlZFBpZWNlc1xuICAgICAgICByZW1vdmVDYXB0dXJlZFBpZWNlcygkcGllY2VUb01vdmUpO1xuICAgICAgICAvLy5wcmV2QWxsKCkubGVuZ3RoIGlzIHVzZWQgdG8gZ2V0IHRoZSBpbmRleFxuICAgICAgICAvL29mIHRoZSBzZWxlY3RlZCBwaWVjZVxuICAgICAgICBjaGVja0tpbmcoJHNlbGVjdGVkUGllY2UsJHBpZWNlVG9Nb3ZlLnByZXZBbGwoKS5sZW5ndGgpO1xuICAgICAgICAgICAgLy9pbmNyZW1lbnQgdGhlIG1vdmUgY291bnRlclxuICAgICAgICBpbmNyZW1lbnRtb3ZlQ291bnRlcigpO1xuICAgICAgICAgICAgLy9kZS1zZWxlY3QgdGhlIHBpZWNlXG4gICAgICAgICRzZWxlY3RlZFBpZWNlLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICAvL3NldCB0aGUgbmV3IGxlZ2FsIG1vdmVzXG4gICAgICAgICQoJ2Rpdi5zcXVhcmUnKS5yZW1vdmVDbGFzcygnbW92YWJsZScpO1xuICAgICAgICByZXNldE1vdmFibGVzKCk7XG4gICAgICAgIC8vIGdldE1vdmFibGVTcXVhcmVzKCkuYWRkQ2xhc3MoJ21vdmFibGUnKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9KTtcblxuXG4gIC8vIE1PUkUgRlVOQ1RJT05TXG4gIC8vdGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBkYXRhIGl0ZW0gd2l0aCBrZXkgJ2p1bXBlZFBpZWNlcycgZnJvbSBldmVyeSBkaXYuc3F1YXJlXG4vLyBhbmQgcmVtb3ZlcyB0aGUgY2xhc3MgJ21vdmFibGUnIGZyb20gZXZlcnkgc3F1YXJlXG4gIGZ1bmN0aW9uIHJlc2V0TW92YWJsZXMoKSB7XG4gICAgJCgnZGl2LnNxdWFyZScpLnJlbW92ZURhdGEoJ2p1bXBlZFBpZWNlcycpLnJlbW92ZUNsYXNzKCdtb3ZhYmxlJyk7XG4gIH1cblxuLy8gUGxheWVyIGNoYW5nZSBmcm9tIHBsYXllciAxIHRvIHBsYXllciAyXG5cblxuICAvL2Z1bmN0aW9uIGZvciB0cmFuc2xhdGluZyBhbiB4LHkgY29vcmRpbmF0ZXMgdG8gYSBwaXhlbCBwb3NpdGlvblxuICAvL3RoZSBjb252ZW50aW9uIGlzIHRoYXQgdGhlIHNxdWFyZSBpbiB0aGUgdXBwZXIgbGVmdCBjb3JuZXIgaXMgYXQgcG9zaXRpb24gMCwwXG4gIC8vdGhlIHNxdWFyZSBpbiB0aGUgdXBwZXIgcmlnaHQsIGF0IDcsMCBhbmQgdGhlIGxvd2VyXG4gIC8vcmlnaHQgYXQgNyw3XG4gIGZ1bmN0aW9uIGdldFBpeGVscyh4LHkpIHtcbiAgICAgIC8vdGFrZXMgYW4geCx5IHBvc2l0aW9uLCByZXR1cm5zXG4gICAgICAvL3BpeGVscyBmcm9tIHRoZSBsZWZ0LCByaWdodFxuICAgIHJldHVybiB7XG4gICAgICAndG9wJzogKHkgKiAod2lkdGgrYm9yZGVyKSkrJ3B4JyxcbiAgICAgICdsZWZ0JzogKHggKiAod2lkdGgrYm9yZGVyKSkrJ3B4J1xuICAgIH07XG4gIH1cblxuICAvL2Z1bmN0aW9uIGZvciB0dXJuaW5nIGEgcGl4ZWwgcG9zaXRpb25cbiAgLy9pbnRvIHRoZSB4LHkgY29vcmRpbmF0ZSBvZiBhIHNxdWFyZSBvbiB0aGUgYm9hcmRcbiAgLy9pdCBmb2xsb3dzIHRoZSBzYW1lIGNvb3JkaW5hdGUgY29udmVudGlvbiBhcyBnZXRQaXhlbHNcbiAgZnVuY3Rpb24gZ2V0Q29vcmRzKHRvcCxsZWZ0KSB7XG4gICAgICAvL3JldHVybnMgYW4geCBhbmQgYSB5XG4gICAgICAvL2dpdmVuIGEgdG9wIGFuZCBsZWZ0IHBpeGVsc1xuICAgIHJldHVybiB7XG4gICAgICAneCc6IGxlZnQgLyAod2lkdGggKyBib3JkZXIpLFxuICAgICAgJ3knOiB0b3AgLyAod2lkdGggKyBib3JkZXIpXG4gICAgfTtcbiAgfVxuXG5cblxuICAvL2Z1bmN0aW9uIGZvciByZXR1cm5pbmdcbi8vdGhlIHNldCBvZiBsZWdhbCBtb3ZlcyBnaXZlbiBhIHBpZWNlXG4vLyB0aGlzIGFsc28gc3RvcmVzIGp1bXBlZCBwaWVjZXMgaW4gYSBkYXRhIGVsZW1lbnQgb2YgZWFjaCBzcXVhcmUgdGhhdCBjYW4gYmUgbW92ZWQgdG9cbiAgZnVuY3Rpb24gZ2V0TW92YWJsZVNxdWFyZXMoJHBpZWNlKSB7XG5cbiAgICAvL3NlbGVjdCBhbGwgb2YgdGhlIHNxdWFyZXNcbiAgICBjb25zdCAkc3F1YXJlcyA9ICQoJ2Rpdi5zcXVhcmUnKTtcblxuICAgIC8vc2VsZWN0IHRoZSBvY2N1cGllZCBvbmVzIHVzaW5nIHRoZSBqUXVlcnkgbWFwKCkgbWV0aG9kXG4gICAgLy9tYXAgY3JlYXRlcyBhIG5ldyBvYmplY3QgZnJvbSBhbiBleGlzdGluZyBvbmVcbiAgICAvL3VzaW5nIGEgdHJhbnNsYXRpb24gZnVuY3Rpb25cbiAgICB2YXIgdGFrZW5TcXVhcmVzID0ge307XG4gICAgJCgnZGl2LnBpZWNlJykuZWFjaChmdW5jdGlvbihpbmRleCxwaWVjZSkge1xuXG4gICAgICAgICAgICAvL3RoaXMgZnVuY3Rpb24gdHJhbnNsYXRlcyBhIHBpZWNlXG4gICAgICBjb25zdCBwb3NpdGlvbiA9ICQocGllY2UpLnBvc2l0aW9uKCk7XG4gICAgICBjb25zdCBjb29yZHMgPSBnZXRDb29yZHMocG9zaXRpb24udG9wLHBvc2l0aW9uLmxlZnQpO1xuICAgICAgY29uc3Qgc3F1YXJlSW5kZXggPSBjb29yZHMueSAqIDggKyBjb29yZHMueDtcbiAgICAgIHRha2VuU3F1YXJlc1tzcXVhcmVJbmRleF0gPSAkKHBpZWNlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3JkcygkcGllY2UucG9zaXRpb24oKS50b3AsJHBpZWNlLnBvc2l0aW9uKCkubGVmdCk7XG5cbiAgICAvL2xpZ2h0cyBtb3ZlIGRvd25cbiAgICBjb25zdCBsaWdodERpcmVjdGlvbiA9IFtcbiAgICAgICAge3g6IDEseTogMX0sXG4gICAgICAgIHt4OiAtMSx5OiAxfVxuICAgIF07XG4gICAgLy9kYXJrcyBtb3ZlIHVwXG4gICAgY29uc3QgZGFya0RpcmVjdGlvbiA9IFtcbiAgICAgICAge3g6IDEseTogLTF9LFxuICAgICAgICB7eDogLTEseTogLTF9XG4gICAgXTtcbiAgICAvL2tpbmdzIG1vdmUgYW55IHdoaWNoIHdheVxuICAgIGNvbnN0IGtpbmdEaXJlY3Rpb24gPSBsaWdodERpcmVjdGlvbi5jb25jYXQoZGFya0RpcmVjdGlvbik7XG5cbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGlmICgkcGllY2UuaGFzQ2xhc3MoJ2tpbmcnKSkge1xuICAgICAgZGlyZWN0aW9uID0ga2luZ0RpcmVjdGlvbjtcbiAgICB9IGVsc2UgaWYgKCRwaWVjZS5oYXNDbGFzcygnbGlnaHQnKSkge1xuICAgICAgZGlyZWN0aW9uID0gbGlnaHREaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IGRhcmtEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0T2ZCb3VuZHMgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgIHJldHVybiAhKGNvb3Jkcy54ID49IDAgJiYgY29vcmRzLnggPCA4ICYmIGNvb3Jkcy55ID49IDAgJiYgY29vcmRzLnkgPCA4KTtcbiAgICB9O1xuXG4gICAgbGV0ICRsZWdhbFNxdWFyZXMgPSAkKCk7XG4gICAgY29uc3QgYnVpbGRNb3ZlcyA9IGZ1bmN0aW9uKGNvb3JkcyxkaXJlY3Rpb24sanVtcHNPbmx5KSB7XG4gICAgICBpZiAob3V0T2ZCb3VuZHMoY29vcmRzKSkgcmV0dXJuO1xuICAgICAgICAvL2N1cnJlbnQgc3F1YXJlIGlzIGF0IGNvb3Jkc1xuICAgICAgY29uc3QgJGN1cnJlbnRTcXVhcmUgPSAkc3F1YXJlcy5lcShjb29yZHMueSo4ICsgY29vcmRzLngpO1xuICAgICAgJC5lYWNoKGRpcmVjdGlvbixmdW5jdGlvbihpbmRleCxkaXJlY3Rpb24pIHtcblxuICAgICAgICBjb25zdCBuZXdDb29yZHMgPSB7XG4gICAgICAgICAgeDogZGlyZWN0aW9uLnggKyBjb29yZHMueCxcbiAgICAgICAgICB5OiBkaXJlY3Rpb24ueSArIGNvb3Jkcy55XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG91dE9mQm91bmRzKG5ld0Nvb3JkcykpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlSW5kZXggPSA4Km5ld0Nvb3Jkcy55ICsgbmV3Q29vcmRzLng7XG4gICAgICAgICAgICAvL2lmIHRoZSBzcXVhcmUgaXMgdGFrZW4sXG4gICAgICAgIGlmICh0YWtlblNxdWFyZXNbbmV3U3F1YXJlSW5kZXhdKSB7XG5cbiAgICAgICAgICAgICAgICAvL0NhbiBvbmx5IGp1bXAgaWYgcGllY2UgaXMgZGlmZmVyZW50IFxuICAgICAgICAgIGlmICgkcGllY2UuaGFzQ2xhc3MoJ2RhcmsnKSkge1xuICAgICAgICAgICAgaWYgKHRha2VuU3F1YXJlc1tuZXdTcXVhcmVJbmRleF0uaGFzQ2xhc3MoJ2RhcmsnKSkgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFrZW5TcXVhcmVzW25ld1NxdWFyZUluZGV4XS5oYXNDbGFzcygnbGlnaHQnKSkgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGp1bXBDb29yZHMgPSB7XG4gICAgICAgICAgICB4OiBkaXJlY3Rpb24ueCoyICsgY29vcmRzLngsXG4gICAgICAgICAgICB5OiBkaXJlY3Rpb24ueSoyICsgY29vcmRzLnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChvdXRPZkJvdW5kcyhqdW1wQ29vcmRzKSkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3QganVtcFNxdWFyZUluZGV4ID0ganVtcENvb3Jkcy55KjggKyBqdW1wQ29vcmRzLng7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUganVtcCBzcXVhcmUgaXMgZnJlZS4uLlxuICAgICAgICAgICAgICAgIC8vYWRkIGl0IGFuZCB0aGUgZGF0YS1qdW1wZWQtcGllY2VzXG4gICAgICAgICAgaWYgKCF0YWtlblNxdWFyZXNbanVtcFNxdWFyZUluZGV4XSkge1xuICAgICAgICAgICAgY29uc3QgJG5ld1NxdWFyZSA9ICRzcXVhcmVzLmVxKGp1bXBTcXVhcmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgd2UgaGF2ZW4ndCBhbHJlYWR5IHNlZW4gaXRcbiAgICAgICAgICAgIGlmICghJG5ld1NxdWFyZS5pcygkbGVnYWxTcXVhcmVzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCB0aGUgcGFzc2VkIG92ZXIgc3F1YXJlIHRvIGl0XG4gICAgICAgICAgICAgICRsZWdhbFNxdWFyZXMgPSAkbGVnYWxTcXVhcmVzLmFkZCgkbmV3U3F1YXJlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbmQgdGhlIGp1bXBlZCBzcXVhcmVzIGZyb20gaG93IHdlIGdvdCBoZXJlXG4gICAgICAgICAgICAgIGxldCAkanVtcGVkUGllY2VzID0gdGFrZW5TcXVhcmVzW25ld1NxdWFyZUluZGV4XTtcbiAgICAgICAgICAgICAgaWYgKCRjdXJyZW50U3F1YXJlLmRhdGEoJ2p1bXBlZFBpZWNlcycpKSB7XG4gICAgICAgICAgICAgICAgJGp1bXBlZFBpZWNlcyA9ICRqdW1wZWRQaWVjZXMuYWRkKCRjdXJyZW50U3F1YXJlLmRhdGEoJ2p1bXBlZFBpZWNlcycpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkbmV3U3F1YXJlLmRhdGEoJ2p1bXBlZFBpZWNlcycsJGp1bXBlZFBpZWNlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYW5kIHJlY3Vyc2UsIHdpdGgganVtcHNPbmx5IHNldCB0byB0cnVlXG4gICAgICAgICAgICAgIGJ1aWxkTW92ZXMoanVtcENvb3JkcyxkaXJlY3Rpb24sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFqdW1wc09ubHkpIHtcbiAgICAgICAgICBjb25zdCAkbmV3U3F1YXJlID0gJHNxdWFyZXMuZXEobmV3U3F1YXJlSW5kZXgpO1xuICAgICAgICAgICRuZXdTcXVhcmUuZGF0YSgnanVtcGVkUGllY2VzJywkKCkpO1xuICAgICAgICAgICRsZWdhbFNxdWFyZXMgPSAkbGVnYWxTcXVhcmVzLmFkZCgkbmV3U3F1YXJlKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGJ1aWxkTW92ZXMoY29vcmRzLGRpcmVjdGlvbixmYWxzZSk7XG4gICAgcmV0dXJuICRsZWdhbFNxdWFyZXM7XG5cbiAgfS8vZW5kIG9mIGdldE1vdmFibGVTcXVhcmVzXG5cbiAgZnVuY3Rpb24gc2V0VXBQaWVjZXMoKSB7XG4gICAgICAvL3NlbGVjdCBhbGwgdGhlIGRpdnMgd2l0aCBjbGFzcyAncGllY2UnXG4gICAgJCgncGllY2UnKTtcbi8vYWRkIHRoZSAnbGlnaHQnIGNsYXNzIHRvIGhhbGYgb2YgdGhlbVxuICAgICQoJ2Rpdi5waWVjZTpldmVuJykuYWRkQ2xhc3MoJ2xpZ2h0Jyk7XG4vL2pRdWVyeSdzIGV2ZW4gYW5kIG9kZCBzZWxlY3RvciBtZXRob2RzIHRvIGFzc2lnbiB0aGUgY2xhc3NlcyAubGlnaHQgYW5kIC5kYXJrLlxuLy9hZGQgdGhlICdkYXJrJyB0byB0aGUgb3RoZXIgaGFsZlxuICAgICQoJ2Rpdi5waWVjZTpvZGQnKS5hZGRDbGFzcygnZGFyaycpO1xuXG4gIH1cblxuICAvL2FjdHVhbGx5IG1vdmluZyB0aGUgcGllY2VcbiAgZnVuY3Rpb24gbW92ZVBpZWNlVG8oJHBpZWNlLG5ld1RvcCxuZXdMZWZ0KSB7XG4gICAgICAvL3NldCB0aGUgY3NzICd0b3AnIGFuZCAnbGVmdCdcbiAgICAgIC8vYXR0cmlidXRlcyBvZiB0aGUgcGFzc2VkIHBpZWNlXG4gICAgICAvL3RvIHRoZSBhcmd1bWVudHMgbmV3VG9wIGFuZCBuZXdMZWZ0XG4gICAgJHBpZWNlLmNzcygndG9wJywgbmV3VG9wKTtcbiAgICAkcGllY2UuY3NzKCdsZWZ0JywgbmV3TGVmdCk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVwQm9hcmQoKSB7XG4gICAgICAvL2l0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGRpdnMgd2l0aCBjbGFzcyBgc3F1YXJlYFxuICAgICAgLy9maWd1cmUgb3V0IHdoZXRoZXIgZWFjaCBvbmUgc2hvdWxkIGJlXG4gICAgICAvL2xpZ2h0IG9yIGRhcmssIGFuZCBhc3NpZ24gdGhlIHByb3BlciBjbGFzc1xuICAgIGNvbnN0ICRlYWNoU3F1YXJlID0gJCgnZGl2LnNxdWFyZScpO1xuICAgICRlYWNoU3F1YXJlLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgaWYobGlnaHRPckRhcmsoaW5kZXgpPT09IDApe1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaWdodCcpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2RhcmsnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIC8vaW5uZXIgaGVscGVyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBudW1iZXIgYmV0d2VlblxuICAgICAgLy8wIGFuZCA2MyAoaW5jbHVzaXZlKSBhbmQgcmV0dXJucyAxIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlXG4gICAgICAvL2RhcmssIGFuZCAwIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlIGxpZ2h0XG4gICAgZnVuY3Rpb24gbGlnaHRPckRhcmsoaW5kZXgpIHtcbiAgICAgIGNvbnN0IHggPSBpbmRleCAlIDg7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgY29uc3Qgb2RkWCA9IHggJSAyO1xuICAgICAgY29uc3Qgb2RkWSA9IHkgJSAyO1xuICAgICAgcmV0dXJuIChvZGRYIF4gb2RkWSk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTZWxlY3QoJHBpZWNlKSB7XG4gICAgICAvL2lmICRwaWVjZSBoYXMgdGhlIGNsYXNzICdzZWxlY3RlZCcscmVtb3ZlIGl0XG4gICAgICAvL2lmICRwaWVjZSBkb2VzIG5vdCBoYXZlIHRoZSBjbGFzcyAnc2VsZWN0ZWQnXG4gICAgICAvL21ha2Ugc3VyZSBubyBvdGhlciBkaXZzIHdpdGggdGhlIGNsYXNzICdwaWVjZSdcbiAgICAgIC8vaGF2ZSB0aGF0IGNsYXNzLCB0aGVuIHNldCAkcGllY2UgdG8gaGF2ZSB0aGUgY2xhc3NcbiAgICBpZigkcGllY2UuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpXG4gICAgICAkcGllY2UucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgZWxzZSB7XG4gICAgICAkKCdkaXYucGllY2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG4gICAgICAgIGlmKCQocGllY2UpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICQocGllY2UpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG4gICAgICAkcGllY2UuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gIH0vL2VuZCBvZiB0b2dnbGVTZWxlY3QgZnVuY3Rpb25cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRtb3ZlQ291bnRlcigpIHtcbiAgICAgIC8vZ2V0cyB0aGUgaHRtbCBvZiB0aGUgc3BhbiB3aXRoIGlkIG1vdmVDb3VudGVyXG4gICAgICAvL3R1cm5zIGl0IGludG8gYSBudW1iZXJcbiAgICAgIC8vaW5jcmVtZW50cyBpdCBieSBvbmVcbiAgICAgIC8vc2V0cyB0aGUgaHRtbCBvZiB0aGUgc3BhbiB3aXRoIGlkIG1vdmVDb3VudGVyXG4gICAgICAvL3RvIHRoZSBuZXcgbW92ZSBjb3VudFxuICAgICQoJyNtb3ZlQ291bnRlcicpLmh0bWwocGFyc2VJbnQoJCgnI21vdmVDb3VudGVyJykuaHRtbCgpLDEwKSsxKTtcbiAgfVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGdldHMgdGhlIGpRdWVyeSBvYmplY3Qgc3RvcmVkIGluXG4vLyB0aGUgZGF0YSBvYmplY3Qgb2YgJHNxdWFyZSB1bmRlciB0aGUga2V5ICdqdW1wZWRQaWVjZXMnXG4vLyBhbmQgcmVtb3ZlcyBldmVyeSBlbGVtZW50IGluIHRoYXQgalF1ZXJ5IHNlbGVjdGlvblxuICBmdW5jdGlvbiByZW1vdmVDYXB0dXJlZFBpZWNlcygkc3F1YXJlKSB7XG4gICAgJHNxdWFyZS5kYXRhKCdqdW1wZWRQaWVjZXMnKS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSAkcGllY2UgYW5kIHRoZSBpbmRleCBvZiBhIHNxdWFyZVxuICAvL3NxdWFyZUluZGV4IHdpbGwgYmUgYmV0d2VlbiAwIC0gNjMgKGluY2x1c2l2ZSkuXG4vLyBpZiB0aGUgaW5kZXggcmVmZXJzIHRvIGFuIGVsZW1lbnQgaW4gdGhlIGZpcnN0IHJvdyBvciBsYXN0IHJvdyxcbi8vIHRoZSBjbGFzcyAna2luZycgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSAkcGllY2VcbiAgZnVuY3Rpb24gY2hlY2tLaW5nKCRwaWVjZSxzcXVhcmVJbmRleCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKXtcbiAgICAgIGlmIChzcXVhcmVJbmRleCA8IDggfHwgc3F1YXJlSW5kZXggPj0gNTYpe1xuICAgICAgICAkcGllY2UuYWRkQ2xhc3MoJ2tpbmcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLy93aW5uaW5nIGNvbmRpdGlvbnM6IElmIG9uZSBwbGF5ZXIgb25seSBoYXMgdGhlaXIgcGllY2VzIG9uIHRoZSBib2FyZCBsZWZ0XG4vL3RoZXkgd2luLlxuICBmdW5jdGlvbiBwaWVjZXNMZWZ0KCl7XG4gICAgY29uc3QgZGFya1BpZWNlcyA9ICRkYXJrUGllY2VzLmxlbmd0aDtcbiAgICBjb25zdCBsaWdodFBpZWNlcyA9ICRsaWdodFBpZWNlcy5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coJGxpZ2h0UGllY2VzLmxlbmd0aCk7XG5cbiAgICBpZiAoZGFya1BpZWNlcyA8IGxpZ2h0UGllY2VzICYmIGxpZ2h0UGllY2VzID09PSAwKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coYFBsYXllciAxIHdpbnNgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBQbGF5ZXIgMiB3aW5zYCk7XG4gICAgfVxuICB9XG5cbiAgLy90aGlzIHJlc2V0cyB0aGUgZ2FtZSBieSBlZmZlY3RpdmVseSByZWxvYWRpbmcgdGhlIHBhZ2UgZnJvbSBjYWNoZVxuICBmdW5jdGlvbiByZXNldCgpe1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cblxuXG5cblxuXG59KTsvL2VuZCBvZiBKUyBsb2FkXG5cblxuLypcblxuVE9ETzpcbjEuIFBsYXllciBjaGFuZ2UgZnJvbSBwbGF5ZXIgMSB0byBwbGF5ZXIgMlxuMi4gUmVzZXQgdGhlIGdhbWUgYnkgcHV0dGluZyB0aGUgcGllY2VzIHRvIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuMy4gV2luIGNvbmRpdGlvbnMsIGlmIGVpdGhlciBwbGF5ZXIgaGFzIHBpZWNlcyBsZWZ0IG9uIHRoZSBib2FyZCB3aGlsZSB0aGUgb3RoZXIgZG9lc24ndFxuICB0aGVuIGl0J3MgYSB3aW4uXG40LlxuXG5cblRPRE86XG4xLiBQbGF5ZXIgY2hhbmdlIGZyb20gcGxheWVyIDEgdG8gcGxheWVyIDJcbjIuIEZpZ3VyZSBvdXQgaG93IHRvIHN0b3AgaWxsZWdhbCBtb3Zlcy5cbiAgLW9ubHkgbWFrZSB0d28gcG9zdGl0aW9ucyBhdmFpbGFibGUgYXQgYW55IGdpdmVuIHRpbWVcbiAgLW9uY2UgdGhlIHBpZWNlIGhhcyBtb3ZlZCBpbnRvIGEgcG9zaXRpb24gbWFrZVxuMy4gSnVtcCBtb3ZlcyB0byBtYWtlIHRoZSBvcHBvbmVudHMgcGllY2UgZGlzYXBwZWFyIGZyb20gdGhlIGJvYXJkIGFuZCByZXNldFxuICB0aGUgcG9zaXRvblxuNC4gS2luZyBtYWtlciBmdW5jdGlvblxuNS4gSG93IHRvIHRha2UgaW4gdGhlIHRvcCByaWdodCBwb3NpdGlvblxuNi5SZXNldCB0aGUgZ2FtZSBiZXR0ZXJcblxuLU9uIGNsaWNrIG9mIHNxYXVyZVxuLWdldCBwaWVjZSBvbiBzcWF1cmUgKGUudGFyZ2V0KVxuLWNoZWNrIGlmIHBpZWNlIGJlbG9uZ3MgdG8gcDEgb3IgcDJcbi1jaGVjayByZWxldmFudCBzcXVhcmVzXG4gIC5pZiBpbmRleCBvZiBjdXJyZW50U3F1YXJlXG4gIC5pZiBzcXVhcmUgaXMgbm90IGluIHRoZSBmaXJzdCBjb2x1bW5cbiAgY2hlY2sgc3F1YXJlIGRpYWdvbmFsbHkgbGVmdCBhbmQgbW92YWJsZSBjbGFzcyBpZiBlbXB0eVxuICAuaWYgc3F1YXJlIGlzIG5vdCBpbiB0aGUgbGFzdCBjb2x1bW5cbiAgY2hlY2sgc3F1YXJlIGRpYWdvbmFsbHkgcmlnaHQgYW5kIG1vdmFibGUgY2xhc3MgaWYgZW1wdHlcbi1vbmNlIHBpZWNlIGlzIG1vdmVkIG9yIGlmIHVuLXNlbGVjdGVkIHJlbW92ZSBtb3ZhYmxlIGNsYXNzIGZyb20gYWxsIHNxdWFyZXMuXG5cbmluZGV4IChwb3NpdGlvbiklIHdpZHRoID09PSAwIC4uLnJlcHJlc2VudHMgdGhlIGZpcnN0IGNvbHVtblxuaW5kZXggJSB3aWR0aCA9PT0gd2lkdGgtMSAuLi5yZXByZXNlbnRzIHRoZSBsYXN0IGNvbHVtblxuXG5pbmRleCArIHdpZHRoLTEgZm9yIHBsYXllcjEgaXMgZ29pbmcgbGVmdCBkaWFnb25hbGx5XG5pbmRleCArIHdpZHRoLTEgZm9yIHBsYXllcjEgaXMgZ29pbmcgcmlnaHQgZGlhZ29uYWxseVxuXG5pbmRleCAtIHdpZHRoKzEgZm9yIHBsYXllcjIgaXMgZ29pbmcgbGVmdCBkaWFnb25hbGx5XG5pbmRleCAtIHdpZHRoLTEgZm9yIHBsYXllcjIgaXMgZ29pbmcgcmlnaHQgZGlhZ29uYWxseVxuLy9cbi8vdXNpbmcgeCBhbmQgeSB2YWx1ZXMuXG4vL3ggdmFsdWUgb24gdGhlIGZpcnN0Q29sdW1uIHdpbGwgYWx3YXlzIGJlIHplcm8gc2luY2UgdGhlIHN0YXJ0aW5nIGlzIGEgemVybyBiYXNlZCBpbmRleFxuLy95IHZhbHVlIG9uIHRoZSBsYXN0Q29sdW1uIHdpbGwgYWx3YXlzIGJlIHNldmVuIHNpbmNlIHRoZSBsYXN0IGluZGV4IG9uIGEgOCo4IGlzIDdcbi8vZGFya1BpZWNlIG1vdmluZyByaWdodCBpcyB4ICsgMSBhbmQgeSAtIDFcbi8vZGFya1BpZWNlIG1vdmluZyBsZWZ0IGlzIHggLSAxIGFuZCB5IC0gMVxuLy9saWdodFBpZWNlIG1vdmluZyByaWdodCBpcyB4IC0gMSBhbmQgeSArIDFcbi8vbGlnaHRQaWVjZSBtb3ZpbmcgbGVmdCBpcyB4ICsgMSBhbmQgeSArIDFcbi8vQW5kIHRvIGp1bXAgd2lsbCBiZSArMiBzaW5nbGUgbW92ZW1lbnRzLlxuLy9jaGVjayBpZiBlbXB0eS4uLmJ5IGNoZWNraW5nIGlmIGEgc3F1YXJlIGlzIG1vdmFibGUgaS5lLiBnZXRNb3ZhYmxlU3F1YXJlcygpLmFkZENsYXNzKCdtb3ZhYmxlJyk7XG4vL2lmIGVtcHR5XG4vLyBjb25zdCBkYXJrUGllY2VNb3ZlUmlnaHQgPShpbmRleC54ICsgKGluZGV4LnggKyAxKSksIChpbmRleC55ICsgKGluZGV4LnkgLSAxKSk7IC8vSSBuZWVkIHRvIGdldCBhIHNldCBvZiBjb29yZHMgYmFjayBhbmQgbWFrZSB0aGF0IGEgbGVnYWxNb3Zlc1xuXG5cblxuXG4vLyBpZiAoaW5kZXggJSB3aWR0aCA9PT0gMCAmJiAkZGFya1BpZWNlKXtcbi8vICAgaW5kZXggKyB3aWR0aCArIDFcbi8vIH1cbi8vIHRha2UgdGhlIGluZGV4IHggYW5kIHkgdmFsdWUgYXMgaW5kZXggYW5kIGNoZWNrXG4vL2lmIGluZGV4ICUgd2lkdGggPT09IDAgdGhlIGZpcnN0IGNvbHVtbiBvclxuLy9pZiBpbmRleCAlIHdpZHRoID09PSB3aWR0aC0xIHRoZSBsYXN0IGNvbHVtblxuLy9pZiBmaXJzdCBjb2x1bW4gaXMgdHJ1ZSB0aGVuIGNoZWNrIGNvbG9yL3AxIG9yIHAyXG4vL3AxXG4vL2lmIHAxIGNoZWNrIHNxdWFyZSBkaWFnb25hbGx5IGxlZnQgaWYgZW1wdHkgdXNpbmdcbi8vaW5kZXggKyB3aWR0aCArIDEgYWRkIHRoZSBjbGFzcyAnbW92YWJsZSdcbi8vaWYgbGFzdCBjb2x1bW4gaXMgdHJ1ZSB0aGVuIGNoZWNrIGNvbG9yL3AxIG9yIHAyXG4vL2lmIHAxIGNoZWNrIHNxdWFyZSBkaWFnb25hbGx5IHJpZ2h0IGlmIGVtcHR5IHVzaW5nXG4vL2luZGV4ICsgd2lkdGgtMSBhZGQgdGhlIGNsYXNzICdtb3ZhYmxlJ1xuLy91c2UgQ1NTIHRvIGhpZ2hsaWdodCB0aGUgbW92YWJsZSBzcXVhdXJlcyAobGVnYWwgbW92ZXMpXG4vL3AyXG4vL2Vsc2UgaXQncyBwMlxuXG4qL1xuIl19
