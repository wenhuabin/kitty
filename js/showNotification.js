if(!document.getElementById('sound')){
    let ele = document.createElement('div');
  ele.id = "sound";
  ele.style.display = 'none';
  document.body.appendChild(ele);
}

function showNotification(){
    if (Notification.permission == "granted") {
      playSound();
      var notification = new Notification("通知", {
          body: '通知内容',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAZtJREFUOBGdk7tKA0EYhXeNlyTEWytE8AHsFW/P4CPYqIWVnViKhdr4BKJVEEEUoyiYQgmInY2XzkKrVBpBDGjW74/ZZHYys4MZ+NiZc85/2GR3fc+ygiDow5qFiTpDXMvwDk+QgzPf9ytc3YvCBCxACVzrjcAqdMQ2E8jCHfx3XTMwbCzHGIFnaHfJL8xGyhF64LHdRmXuVroa5RzWFdO2/cL4sZmKvlUrRhiEimLo212EUfBlgOsM5KAKplVGzEhw3uTWtaXGz9I2+Csxc4tSfGIJHGldLUfm9i2zeSl+sJhTLU2awNyYZfa+k2wJPpSZKvsCyMs/ruim7SfiBshNJOoBeRaiRxdlXXBguROTfIjYHW3RThKAY9O0Q8vjN99ftVcMOHUUxNnnmEm1Ux5gCi7ipvBe4cWRucRPN8o57DgGbvAHoB+KjuyeWjxN2PYlSVFvGGafgSswrW/EyTBbuyJsGpJSkIkEOaCloWDIr+lZCfuwrYRlsPl/aRN4+nOR2fBd1tJ/d7NMQD7zVKsbVcgkQd7juajjeb8fJ2hOK07PyQAAAABJRU5ErkJggg==',
      });

      notification.onclick = function() {
          notification.close();    
      };
    } 
} 

function playSound(){   
    document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="https://freesound.org/data/previews/234/234524_4019029-lq.mp3" /></audio>';
}
