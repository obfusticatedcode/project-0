"use strict";$(function(){function e(){var e=$(event.target).position(),t=a(e.top,e.left);return console.log(t),t}function t(e,t){return{top:t*(c+r)+"px",left:e*(c+r)+"px"}}function a(e,t){return{x:t/(c+r),y:e/(c+r)}}function o(){var e=$("div.square"),t=$("div.piece").map(function(t,o){var s=$(o).position(),i=a(s.top,s.left),n=8*i.y+i.x;return e[n]});return $("div.square.dark").not(t)}function s(e,t,a){e.css("top",t),e.css("left",a)}function i(e){e.hasClass("selected")?e.removeClass("selected"):($("div.piece").each(function(e,t){$(t).hasClass("selected")&&$(t).removeClass("selected")}),e.addClass("selected"))}function n(){$("#moveCounter").html(parseInt($("#moveCounter").html(),10)+1)}function l(){location.reload()}for(var c=46,r=2,d=$("div#board"),v=$("div#pieces"),u=$("#reset-button"),f=0;f<64;f++)d.append($("<div/>").addClass("square"));!function(){function e(e){return e%8%2^Math.floor(e/8)%2}$("div.square").each(function(t){0===e(t)?$(this).addClass("light"):$(this).addClass("dark")})}();for(var p=0;p<24;p++)v.append($("<div/>").addClass("piece"));!function(){$("piece"),$("div.piece:even").addClass("light"),$("div.piece:odd").addClass("dark")}(),$("div.piece.light").each(function(e,a){var o=Math.floor(e/4),i=e%4*2+(1-o%2),n=t(i,o);s($(a),n.top,n.left)}),$("div.piece.dark").each(function(e,a){var o=Math.floor(e/4)+5,i=e%4*2+(1-o%2),n=t(i,o);s($(a),n.top,n.left)}),o().addClass("movable"),u.on("click",function(){l()}),$("div.piece").on("click",function(t){var a=$(t.target);e(),a.hasClass("dark")?console.log(a):console.log("This is a light piece"),i(a)}),$("div.square").on("click",function(a){e();var i=$(a.target);if(i.hasClass("movable")){var l=$("div.piece.selected");if(1===l.length){var c=i.prevAll().length,r=c%8,d=Math.floor(c/8),v=t(r,d);s(l,v.top,v.left),n(),l.removeClass("selected"),$("div.square").removeClass("movable"),o().addClass("movable")}}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJldmVudCIsInRhcmdldCIsIiRwaWVjZVRvTW92ZSIsInRvcCIsImxlZnQiLCJjb25zb2xlIiwibG9nIiwiY29vcmRzIiwiZ2V0UGl4ZWxzIiwieCIsInkiLCJ3aWR0aCIsImJvcmRlciIsImdldENvb3JkcyIsIiR0YWtlblNxdWFyZXMiLCJnZXRNb3ZhYmxlU3F1YXJlcyIsIiRzcXVhcmVzIiwibWFwIiwiaW5kZXgiLCJwaWVjZSIsImFkZENsYXNzIiwic3F1YXJlSW5kZXgiLCJtb3ZlUGllY2VUbyIsIm5vdCIsIm5ld0xlZnQiLCJuZXdUb3AiLCIkcGllY2UiLCJjc3MiLCJ0b2dnbGVTZWxlY3QiLCJoYXNDbGFzcyIsInJlc2V0IiwiZWFjaCIsInJlbW92ZUNsYXNzIiwiaW5jcmVtZW50bW92ZUNvdW50ZXIiLCJodG1sIiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsIiRib2FyZCIsImkiLCJzcXVhcmVDb3VudCIsImFwcGVuZCIsImZsb29yIiwibGlnaHRPckRhcmsiLCJ0aGlzIiwiJHBpZWNlcyIsIk1hdGgiLCJwaXhlbFBvc2l0aW9uIiwiJHJlc2V0QnV0dG9uIiwib24iLCIkdGhpc1BpZWNlIiwiJHNlbGVjdGVkUGllY2UiLCJlIiwibGVuZ3RoIiwicHJldkFsbCIsInBpeGVscyJdLCJtYXBwaW5ncyI6IllBQ0FBLEdBQUUsV0FnSEVDLFFBQUFBLEtBQ0EsR0FBQUMsR0FBQUYsRUFBQUcsTUFBQUMsUUFBQUYsV0FDTUcsRUFBQUEsRUFBbUJELEVBQXpCRSxJQUFBSixFQUFBSyxLQUdBLE9BWEFDLFNBQVFDLElBQUlDLEdBV1pBLEVBbURFLFFBQUFDLEdBQUFDLEVBQUFDLEdBR0EsT0FDQVAsSUFBS0EsR0FBT1EsRUFBQUEsR0FBUCxLQUZQUCxLQUFBSyxHQUFBRSxFQUFBQyxHQUFBLE1BVUUsUUFBQUMsR0FBQVYsRUFBQUMsR0FHSixPQUNBSyxF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QUF0RCxFQUFBLHFCQUdKb0MsSUFBQUEsSUFBQUEsRUFBQUEsT0FBQUEsQ0FQQSxHQUFNZixHQUFRaEIsRUFBYW9ELFVBQVVELE9BV2pDNUMsRUFBQVMsRUFBQSxFQUNGUixFQUFBb0MsS0FBRkosTUFBZ0JWLEVBQVksR0FDNUJqQixFQUFBQSxFQUFvQkssRUFBQUEsRUFHdkJFLEdBQUE2QixFQUFBSSxFQUFBcEQsSUFBQW9ELEVBQUFuRCxNQVRHNkIsSUFFQWtCLEVBQWVuQixZQUFZLFlBZ0JqQ25DLEVBQUEsY0FBQW1DLFlBQUEsV0FDQWpCLElBQUFLLFNBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2FkaW5nIEpTXG4kKCgpPT57XG5cbiAgLy9HTE9CQUwgVkFSSUFCTEVTXG4gIGNvbnN0IHdpZHRoID0gNDY7XG4gIGNvbnN0IGJvcmRlciA9IDI7XG4gIGNvbnN0ICRib2FyZCA9ICQoJ2RpdiNib2FyZCcpO1xuICBjb25zdCAkcGllY2VzID0gJCgnZGl2I3BpZWNlcycpO1xuICBjb25zdCAkcmVzZXRCdXR0b24gPSAkKCcjcmVzZXQtYnV0dG9uJyk7XG5cblxuXG5cbiAgLy9DcmVhdGluZyB0aGUgNjQgc3F1YXJlcyBhbmQgYWRkaW5nIHRoZW0gdG8gdGhlIERPTVxuICBjb25zdCBzcXVhcmVDb3VudCA9IDgqODsgLy84IHJvd3MgYnkgOCBjb2x1bW5zOyB6ZXJvIGJhc2VkIGluZGV4XG4gIGZvciAobGV0IGkgPSAwO2k8c3F1YXJlQ291bnQ7aSsrKSB7XG5cbiAgLy90aGlzIGxpbmUgY3JlYXRlcyBhIG5ldyBkaXYgd2l0aCB0aGUgY2xhc3MgJ3NxdWFyZSdcbiAgLy9hbmQgYXBwZW5kcyBpdCB0byB0aGUgZGl2IHdpdGggaWQgJ2JvYXJkJ1xuICAgICRib2FyZC5hcHBlbmQoJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3NxdWFyZScpKTtcbiAgfVxuXG5cbiAgLy9zZXQgdXAgdGhlIGJvYXJkIHdpdGggdGhlIGNvcnJlY3QgY2xhc3NlcyBmb3IgdGhlIGxpZ2h0IGFuZCBkYXJrIHNxdWFyZXNcbiAgc2V0VXBCb2FyZCgpO1xuXG5cbiAgICAgIC8vY3JlYXRpbmcgdGhlIDI0IHBpZWNlcyBhbmQgYWRkaW5nIHRoZW0gdG8gdGhlIERPTVxuICBjb25zdCBwaWVjZUNvdW50ID0gMjQ7XG4gIGZvciAobGV0IGk9MDtpPHBpZWNlQ291bnQ7aSsrKSB7XG5cbiAgICAvL3RoaXMgbGluZSBhcHBlbmRzIGFuIGVtcHR5IGRpdiB3aXRoIHRoZSBjbGFzcyAncGllY2UnIHRvIHRoZSBkaXYgd2l0aCBpZCAncGllY2VzJ1xuICAgICRwaWVjZXMuYXBwZW5kKCQoJzxkaXYvPicpLmFkZENsYXNzKCdwaWVjZScpKTtcblxuICB9XG5cblxuICAvL3NldHMgdXAgdGhlIGNsYXNzZXMgZm9yIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgcGllY2VcbiAgc2V0VXBQaWVjZXMoKTtcblxuICAvL3RoaXMgbG9vcCBtb3ZlcyBhbGwgdGhlIGxpZ2h0IHBpZWNlcyB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xuICAkKCdkaXYucGllY2UubGlnaHQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG5cbiAgICAvL3R1cm5pbmcgdGhlIGluZGV4IChmcm9tIDAgLSAxMSlcbiAgICAvL2ludG8gYSB4LHkgc3F1YXJlIGNvb3JkaW5hdGUgdXNpbmcgbWF0aFxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gNCk7XG4gICAgY29uc3QgeCA9IChpbmRleCAlIDQpICogMiArICgxIC0geSUyKTtcblxuICAgIC8vdHVybmluZyB0aGUgeCx5IGNvb3JkaW5nYXRlIGludG8gYSBwaXhlbCBwb3NpdGlvblxuICAgIGNvbnN0IHBpeGVsUG9zaXRpb24gPSBnZXRQaXhlbHMoeCx5KTtcbiAgICAvL2FjdHVhbGx5IG1vdmluZyB0aGUgcGllY2UgdG8gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICBtb3ZlUGllY2VUbygkKHBpZWNlKSxwaXhlbFBvc2l0aW9uLnRvcCxwaXhlbFBvc2l0aW9uLmxlZnQpO1xuICB9KTtcblxuICAgIC8vdGhpcyBsb29wIG1vdmVzIGFsbCB0aGUgZGFyayBwaWVjZXMgdG8gdGhlaXIgaW5pdGlhbCBwb3NpdGlvbnNcbiAgJCgnZGl2LnBpZWNlLmRhcmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG4gICAgLy90dXJuaW5nIHRoZSBpbmRleCAoZnJvbSAwIC0gMTEpXG4gICAgLy9pbnRvIGEgeCx5IHNxdWFyZSBjb29yZGluYXRlIHVzaW5nIG1hdGhcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleC80KSArIDU7XG4gICAgY29uc3QgeCA9IChpbmRleCAlIDQpICogMiArICgxLXklMik7XG5cbiAgICAvL3R1cm5pbmcgdGhlIHgseSBjb29yZGluYXRlIGludG8gYSBwaXhlbCBwb3NpdGlvblxuICAgIGNvbnN0IHBpeGVsUG9zaXRpb24gPSBnZXRQaXhlbHMoeCx5KTtcbiAgICAvL21vdmluZyB0aGUgcGllY2UgdG8gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICBtb3ZlUGllY2VUbygkKHBpZWNlKSxwaXhlbFBvc2l0aW9uLnRvcCxwaXhlbFBvc2l0aW9uLmxlZnQpO1xuICB9KTtcblxuICAgIC8vc2V0IHVwIGluaXRpYWwgc3F1YXJlcyB0aGUgY2xhc3MgJ21vdmFibGUnIHJlcHJlc2VudHMgYSBzcXVhcmVcbiAgICAvL3RoYXQgaXMgdW5vY2N1cGllZFxuICBnZXRNb3ZhYmxlU3F1YXJlcygpLmFkZENsYXNzKCdtb3ZhYmxlJyk7XG5cbiAgICAgIC8vRVZFTlRTXG5cbiAgICAvL3Jlc2V0dGluZyB0aGUgZ2FtZS5cbiAgJHJlc2V0QnV0dG9uLm9uKCdjbGljaycsICgpPT57XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgJCgnZGl2LnBpZWNlJykub24oJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgLy90dXJuIGB0aGlzYCBpbnRvIGEgalF1ZXJ5IG9iamVjdFxuICAgIGNvbnN0ICR0aGlzUGllY2UgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgLy9URVNULiBjaGVja2luZyB0aGUgcGllY2UgaW5kZXguXG4gICAgLy9nZXR0aW5nIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGllY2VcbiAgICBjdXJyZW50UG9zaXRpb24oKTtcbiAgICAvLyB0YWtlIHRoZSBpbmRleCB4IGFuZCB5IHZhbHVlIGFzIGluZGV4IGFuZCBjaGVja1xuICAgIC8vaWYgaW5kZXggJSB3aWR0aCA9PT0gMCB0aGUgZmlyc3QgY29sdW1uIG9yXG4gICAgLy9pZiBpbmRleCAlIHdpZHRoID09PSB3aWR0aC0xIHRoZSBsYXN0IGNvbHVtblxuICAgIC8vaW5kZXggKyB3aWR0aFxuICAgIC8vIGNoZWNrIGlmIGl0J3MgcDEgb3IgcDIgYnkgdGhlIGNvbG9yXG4gICAgaWYgKCR0aGlzUGllY2UuaGFzQ2xhc3MoJ2RhcmsnKSl7XG4gICAgICBjb25zb2xlLmxvZygkdGhpc1BpZWNlKTtcbiAgICB9ZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyBhIGxpZ2h0IHBpZWNlYCk7XG4gICAgfVxuXG5cblxuICAgIC8vdG9nZ2xpbmcgdGhlICdzZWxlY3RlZCcgY2xhc3Mgb2YgdGhpcyBwaWVjZVxuICAgIC8vYW5kIHBvc3NpYmxlIGRlc2VsZWN0aW5nIG90aGVyIHBpZWNlc1xuICAgIHRvZ2dsZVNlbGVjdCgkdGhpc1BpZWNlKTtcblxuICB9KTtcblxuICAvL2NoZWNrcyB0aGUgY3VycmVudFBvc2l0aW9uIG9mIHRoZSBjbGlja2VkIG9yIHNlbGVjdGVkIGRpdiBhbmQgcmV0dXJucyB0aGUgY29vcmRzLlxuICBmdW5jdGlvbiBjdXJyZW50UG9zaXRpb24oKXtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICQoZXZlbnQudGFyZ2V0KS5wb3NpdGlvbigpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3Jkcyhwb3NpdGlvbi50b3AscG9zaXRpb24ubGVmdCk7XG4gICAgY29uc29sZS5sb2coY29vcmRzKTsvL2dldHRpbmcgdGhlIGxvY2F0aW9uIG9mIHRoZSBwaWVjZVxuICAgIHJldHVybiBjb29yZHM7XG5cbiAgfVxuXG4gICQoJ2Rpdi5zcXVhcmUnKS5vbignY2xpY2snLCAoZSk9PntcbiAgICBjdXJyZW50UG9zaXRpb24oKTtcbiAgICAvL3R1cm4gYGUgb3IgZXZlbnRgIGludG8gYSBqUXVlcnkgb2JqZWN0XG4gICAgY29uc3QgJHBpZWNlVG9Nb3ZlID0gJChlLnRhcmdldCk7XG5cblxuICAgIC8vaWYgJHRoaXMgaXMgYSBsZWdhbCBzcXVhcmUgdG8gbW92ZSB0by4uLlxuICAgIGlmICgkcGllY2VUb01vdmUuaGFzQ2xhc3MoJ21vdmFibGUnKSkge1xuXG4gICAgICAgICAgLy9nZXQgdGhlIHBpZWNlIHdpdGggdGhlIGNsYXNzICdzZWxlY3RlZCdcbiAgICAgIGNvbnN0ICRzZWxlY3RlZFBpZWNlID0gJCgnZGl2LnBpZWNlLnNlbGVjdGVkJyk7XG5cbiAgICAgICAgICAvL29ubHkgbW92ZSBpZiB0aGVyZSBpcyBleGFjdGx5IG9uZSBzZWxlY3RlZCBwaWVjZVxuICAgICAgaWYgKCRzZWxlY3RlZFBpZWNlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy9nZXQgdGhlIGluZGV4IG9mIHRoZSBzcXVhcmVcbiAgICAgICAgICAgIC8vYW5kIHRyYW5zbGF0ZSBpdCB0byBwaXhlbCBwb3NpdGlvblxuICAgICAgICBjb25zdCBpbmRleCA9ICRwaWVjZVRvTW92ZS5wcmV2QWxsKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCB4ID0gaW5kZXggJSA4O1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgICBjb25zdCBwaXhlbHMgPSBnZXRQaXhlbHMoeCx5KTtcbiAgICAgICAgICAgIC8vYWN0dWFsbHkgZG8gdGhlIG1vdmluZ1xuICAgICAgICBtb3ZlUGllY2VUbygkc2VsZWN0ZWRQaWVjZSxwaXhlbHMudG9wLHBpeGVscy5sZWZ0KTtcbiAgICAgICAgICAgIC8vaW5jcmVtZW50IHRoZSBtb3ZlIGNvdW50ZXJcbiAgICAgICAgaW5jcmVtZW50bW92ZUNvdW50ZXIoKTtcbiAgICAgICAgICAgIC8vdW4tc2VsZWN0IHRoZSBwaWVjZVxuICAgICAgICAkc2VsZWN0ZWRQaWVjZS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgLy9zZXQgdGhlIG5ldyBsZWdhbCBtb3Zlc1xuICAgICAgICAkKCdkaXYuc3F1YXJlJykucmVtb3ZlQ2xhc3MoJ21vdmFibGUnKTtcbiAgICAgICAgZ2V0TW92YWJsZVNxdWFyZXMoKS5hZGRDbGFzcygnbW92YWJsZScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH0pO1xuXG5cbiAgLy8gTU9SRSBGVU5DVElPTlNcblxuXG4gIC8vZnVuY3Rpb24gZm9yIHRyYW5zbGF0aW5nIGFuIHgseSBjb29yZGluYXRlcyB0byBhIHBpeGVsIHBvc2l0aW9uXG4gIC8vdGhlIGNvbnZlbnRpb24gaXMgdGhhdCB0aGUgc3F1YXJlIGluIHRoZSB1cHBlciBsZWZ0IGNvcm5lciBpcyBhdCBwb3NpdGlvbiAwLDBcbiAgLy90aGUgc3F1YXJlIGluIHRoZSB1cHBlciByaWdodCwgYXQgNywwIGFuZCB0aGUgbG93ZXJcbiAgLy9yaWdodCBhdCA3LDdcbiAgZnVuY3Rpb24gZ2V0UGl4ZWxzKHgseSkge1xuICAgICAgLy90YWtlcyBhbiB4LHkgcG9zaXRpb24sIHJldHVybnNcbiAgICAgIC8vcGl4ZWxzIGZyb20gdGhlIGxlZnQsIHJpZ2h0XG4gICAgcmV0dXJuIHtcbiAgICAgICd0b3AnOiAoeSAqICh3aWR0aCtib3JkZXIpKSsncHgnLFxuICAgICAgJ2xlZnQnOiAoeCAqICh3aWR0aCtib3JkZXIpKSsncHgnXG4gICAgfTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gZm9yIHR1cm5pbmcgYSBwaXhlbCBwb3NpdGlvblxuICAvL2ludG8gdGhlIHgseSBjb29yZGluYXRlIG9mIGEgc3F1YXJlIG9uIHRoZSBib2FyZFxuICAvL2l0IGZvbGxvd3MgdGhlIHNhbWUgY29vcmRpbmF0ZSBjb252ZW50aW9uIGFzIGdldFBpeGVsc1xuICBmdW5jdGlvbiBnZXRDb29yZHModG9wLGxlZnQpIHtcbiAgICAgIC8vcmV0dXJucyBhbiB4IGFuZCBhIHlcbiAgICAgIC8vZ2l2ZW4gYSB0b3AgYW5kIGxlZnQgcGl4ZWxzXG4gICAgcmV0dXJuIHtcbiAgICAgICd4JzogbGVmdCAvICh3aWR0aCArIGJvcmRlciksXG4gICAgICAneSc6IHRvcCAvICh3aWR0aCArIGJvcmRlcilcbiAgICB9O1xuICB9XG5cbiAgLy91dGlsaXR5IGZ1bmN0aW9uIGZvciByZXR1cm5pbmdcbiAgLy90aGUgc2V0IG9mIHVub2NjdXBpZWQgZGFyayBzcXVhcmVzXG4gIC8vKHBvc3NpYmxlIHBsYWNlcyB0byBtb3ZlIGEgcGllY2UpXG4gIGZ1bmN0aW9uIGdldE1vdmFibGVTcXVhcmVzKCkge1xuICAgICAgLy9zZWxlY3QgYWxsIG9mIHRoZSBzcXVhcmVzXG4gICAgY29uc3QgJHNxdWFyZXMgPSAkKCdkaXYuc3F1YXJlJyk7XG5cbiAgLy9zZWxlY3QgdGhlIG9jY3VwaWVkIG9uZXMgdXNpbmcgdGhlIGpRdWVyeSBtYXAoKSBtZXRob2RcbiAgLy9tYXAgY3JlYXRlcyBhIG5ldyBvYmplY3QgZnJvbSBhbiBleGlzdGluZyBvbmUgdXNpbmcgYSB0cmFuc2xhdGlvbiBmdW5jdGlvblxuICAgIGNvbnN0ICR0YWtlblNxdWFyZXMgPVxuICAgICAgICAgICQoJ2Rpdi5waWVjZScpLm1hcChmdW5jdGlvbihpbmRleCxwaWVjZSkge1xuICAgICAgICAgICAgLy90aGlzIGZ1bmN0aW9uIHRyYW5zbGF0ZXMgYSBwaWVjZVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHBpZWNlKS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKHBvc2l0aW9uLnRvcCxwb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUluZGV4ID0gY29vcmRzLnkgKiA4ICsgY29vcmRzLng7XG4gICAgICAgICAgICByZXR1cm4gJHNxdWFyZXNbc3F1YXJlSW5kZXhdO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgJG91dCA9ICQoJ2Rpdi5zcXVhcmUuZGFyaycpLm5vdCgkdGFrZW5TcXVhcmVzKTtcbiAgICByZXR1cm4gJG91dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVwUGllY2VzKCkge1xuICAgICAgLy9zZWxlY3QgYWxsIHRoZSBkaXZzIHdpdGggY2xhc3MgJ3BpZWNlJ1xuICAgICQoJ3BpZWNlJyk7XG4vL2FkZCB0aGUgJ2xpZ2h0JyBjbGFzcyB0byBoYWxmIG9mIHRoZW1cbiAgICAkKCdkaXYucGllY2U6ZXZlbicpLmFkZENsYXNzKCdsaWdodCcpO1xuLy9qUXVlcnkncyBldmVuIGFuZCBvZGQgc2VsZWN0b3IgbWV0aG9kcyB0byBhc3NpZ24gdGhlIGNsYXNzZXMgLmxpZ2h0IGFuZCAuZGFyay5cbi8vYWRkIHRoZSAnZGFyaycgdG8gdGhlIG90aGVyIGhhbGZcbiAgICAkKCdkaXYucGllY2U6b2RkJykuYWRkQ2xhc3MoJ2RhcmsnKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZVBpZWNlVG8oJHBpZWNlLG5ld1RvcCxuZXdMZWZ0KSB7XG4gICAgICAvL3NldCB0aGUgY3NzICd0b3AnIGFuZCAnbGVmdCdcbiAgICAgIC8vYXR0cmlidXRlcyBvZiB0aGUgcGFzc2VkIHBpZWNlXG4gICAgICAvL3RvIHRoZSBhcmd1bWVudHMgbmV3VG9wIGFuZCBuZXdMZWZ0XG4gICAgJHBpZWNlLmNzcygndG9wJywgbmV3VG9wKTtcbiAgICAkcGllY2UuY3NzKCdsZWZ0JywgbmV3TGVmdCk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVwQm9hcmQoKSB7XG4gICAgICAvL2l0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGRpdnMgd2l0aCBjbGFzcyBgc3F1YXJlYFxuICAgICAgLy9maWd1cmUgb3V0IHdoZXRoZXIgZWFjaCBvbmUgc2hvdWxkIGJlXG4gICAgICAvL2xpZ2h0IG9yIGRhcmssIGFuZCBhc3NpZ24gdGhlIHByb3BlciBjbGFzc1xuICAgIGNvbnN0ICRlYWNoU3F1YXJlID0gJCgnZGl2LnNxdWFyZScpO1xuICAgICRlYWNoU3F1YXJlLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgaWYobGlnaHRPckRhcmsoaW5kZXgpPT09IDApe1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaWdodCcpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2RhcmsnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIC8vaW5uZXIgaGVscGVyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBudW1iZXIgYmV0d2VlblxuICAgICAgLy8wIGFuZCA2MyAoaW5jbHVzaXZlKSBhbmQgcmV0dXJucyAxIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlXG4gICAgICAvL2RhcmssIGFuZCAwIGlmIHRoZSBzcXVhcmUgc2hvdWxkIGJlIGxpZ2h0XG4gICAgZnVuY3Rpb24gbGlnaHRPckRhcmsoaW5kZXgpIHtcbiAgICAgIGNvbnN0IHggPSBpbmRleCAlIDg7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgY29uc3Qgb2RkWCA9IHggJSAyO1xuICAgICAgY29uc3Qgb2RkWSA9IHkgJSAyO1xuICAgICAgcmV0dXJuIChvZGRYIF4gb2RkWSk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTZWxlY3QoJHBpZWNlKSB7XG4gICAgICAvL2lmICRwaWVjZSBoYXMgdGhlIGNsYXNzICdzZWxlY3RlZCcscmVtb3ZlIGl0XG4gICAgICAvL2lmICRwaWVjZSBkb2VzIG5vdCBoYXZlIHRoZSBjbGFzcyAnc2VsZWN0ZWQnXG4gICAgICAvL21ha2Ugc3VyZSBubyBvdGhlciBkaXZzIHdpdGggdGhlIGNsYXNzICdwaWVjZSdcbiAgICAgIC8vaGF2ZSB0aGF0IGNsYXNzLCB0aGVuIHNldCAkcGllY2UgdG8gaGF2ZSB0aGUgY2xhc3NcbiAgICBpZigkcGllY2UuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpXG4gICAgICAkcGllY2UucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgZWxzZSB7XG4gICAgICAkKCdkaXYucGllY2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHBpZWNlKSB7XG4gICAgICAgIGlmKCQocGllY2UpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICQocGllY2UpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG4gICAgICAkcGllY2UuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gIH0vL2VuZCBvZiB0b2dnbGVTZWxlY3QgZnVuY3Rpb25cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRtb3ZlQ291bnRlcigpIHtcbiAgICAgIC8vZ2V0cyB0aGUgaHRtbCBvZiB0aGUgc3BhbiB3aXRoIGlkIG1vdmVDb3VudGVyXG4gICAgICAvL3R1cm5zIGl0IGludG8gYSBudW1iZXJcbiAgICAgIC8vaW5jcmVtZW50cyBpdCBieSBvbmVcbiAgICAgIC8vc2V0cyB0aGUgaHRtbCBvZiB0aGUgc3BhbiB3aXRoIGlkIG1vdmVDb3VudGVyXG4gICAgICAvL3RvIHRoZSBuZXcgbW92ZSBjb3VudFxuICAgICQoJyNtb3ZlQ291bnRlcicpLmh0bWwocGFyc2VJbnQoJCgnI21vdmVDb3VudGVyJykuaHRtbCgpLDEwKSsxKTtcbiAgfVxuXG4gIC8vdGhpcyByZXNldHMgdGhlIGdhbWUgYnkgZWZmZWN0aXZlbHkgcmVsb2FkaW5nIHRoZSBwYWdlIGZyb20gY2FjaGVcbiAgZnVuY3Rpb24gcmVzZXQoKXtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG5cblxuXG59KTsvL2VuZCBvZiBKUyBsb2FkXG5cblxuLypcblRPRE86XG4xLiBQbGF5ZXIgY2hhbmdlIGZyb20gcGxheWVyIDEgdG8gcGxheWVyIDJcbjIuIEZpZ3VyZSBvdXQgaG93IHRvIHN0b3AgaWxsZWdhbCBtb3Zlcy5cbiAgLW9ubHkgbWFrZSB0d28gcG9zdGl0aW9ucyBhdmFpbGFibGUgYXQgYW55IGdpdmVuIHRpbWVcbiAgLW9uY2UgdGhlIHBpZWNlIGhhcyBtb3ZlZCBpbnRvIGEgcG9zaXRpb24gbWFrZVxuXG4gIC1PbiBjbGljayBvZiBzcWF1cmVcbiAgLWdldCBwaWVjZSBvbiBzcWF1cmUgKGUudGFyZ2V0KVxuICAtY2hlY2sgaWYgcGllY2UgYmVsb25ncyB0byBwMSBvciBwMlxuICAtY2hlY2sgcmVsZXZhbnQgc3F1YXJlc1xuICAgIC5pZiBpbmRleCBvZiBjdXJyZW50U3F1YXJlXG4gICAgLmlmIHNxdWFyZSBpcyBub3QgaW4gdGhlIGZpcnN0IGNvbHVtblxuICAgIGNoZWNrIHNxdWFyZSBkaWFnb25hbGx5IGxlZnQgYW5kIG1vdmFibGUgY2xhc3MgaWYgZW1wdHlcbiAgICAuaWYgc3F1YXJlIGlzIG5vdCBpbiB0aGUgbGFzdCBjb2x1bW5cbiAgICBjaGVjayBzcXVhcmUgZGlhZ29uYWxseSByaWdodCBhbmQgbW92YWJsZSBjbGFzcyBpZiBlbXB0eVxuICAtb25jZSBwaWVjZSBpcyBtb3ZlZCBvciBpZiB1bi1zZWxlY3RlZCByZW1vdmUgbW92YWJsZSBjbGFzcyBmcm9tIGFsbCBzcXVhcmVzLlxuXG5pbmRleCAocG9zaXRpb24pJSB3aWR0aCA9PT0gMCAuLi5yZXByZXNlbnRzIHRoZSBmaXJzdCBjb2x1bW5cbmluZGV4ICUgd2lkdGggPT09IHdpZHRoLTEgLi4ucmVwcmVzZW50cyB0aGUgbGFzdCBjb2x1bW5cblxuaW5kZXggKyB3aWR0aC0xIGZvciBwbGF5ZXIxIGlzIGdvaW5nIGxlZnQgZGlhZ29uYWxseVxuaW5kZXggKyB3aWR0aC0xIGZvciBwbGF5ZXIxIGlzIGdvaW5nIHJpZ2h0IGRpYWdvbmFsbHlcblxuaW5kZXggLSB3aWR0aCsxIGZvciBwbGF5ZXIyIGlzIGdvaW5nIGxlZnQgZGlhZ29uYWxseVxuaW5kZXggLSB3aWR0aC0xIGZvciBwbGF5ZXIyIGlzIGdvaW5nIHJpZ2h0IGRpYWdvbmFsbHlcblxuXG4zLiBKdW1wIG1vdmVzIHRvIG1ha2UgdGhlIG9wcG9uZW50cyBwaWVjZSBkaXNhcHBlYXIgZnJvbSB0aGUgYm9hcmQgYW5kIHJlc2V0XG4gIHRoZSBwb3NpdG9uXG40LiBLaW5nIG1ha2VyIGZ1bmN0aW9uXG41LiBIb3cgdG8gdGFrZSBpbiB0aGUgdG9wIHJpZ2h0IHBvc2l0aW9uXG42LlJlc2V0IHRoZSBnYW1lIGJldHRlclxuXG5cbiovXG4iXX0=
