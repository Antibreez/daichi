"use strict";

(function () {
  var fileDropArea = document.querySelectorAll('.input-file__label');

  function makeFileLoad(fileDropArea) {
    var fileInput = fileDropArea.querySelector('input');
    var fileClear = fileDropArea.parentNode.querySelector('.file-load__clear'); // Сбрасываем стандартные события при перетаскивании файла

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
      fileDropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ; // Добавляем стили при перетаскивании файла над нужной областью

    ['dragenter', 'dragover'].forEach(function (eventName) {
      fileDropArea.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(function (eventName) {
      fileDropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
      fileDropArea.classList.add('highlight');
    }

    ;

    function unhighlight(e) {
      fileDropArea.classList.remove('highlight');
    }

    ; //

    fileDropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      var dt = e.dataTransfer;
      var files = dt.files;

      if (fileInput.files && fileInput.files[0]) {
        fileInput.value = '';

        if (!/safari/i.test(navigator.userAgent)) {
          fileInput.type = '';
          fileInput.type = 'file';
        }
      }

      fileInput.files = files;
      onFileChange();
    }

    ;

    var onFileChange = function onFileChange() {
      readUrl(fileInput);
    };

    var readUrl = function readUrl(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          fileDropArea.parentNode.classList.add('loaded');
          fileDropArea.parentNode.querySelector('.file-load__name').textContent = input.files[0].name;
          window.onInstallationFileDrop && window.onInstallationFileDrop();
          window.onPassportFileDrop && window.onPassportFileDrop();
        };

        reader.readAsDataURL(input.files[0]);
      }
    };

    function onClear() {
      fileDropArea.parentNode.classList.remove('loaded');
      fileInput.value = '';

      if (!/safari/i.test(navigator.userAgent)) {
        fileInput.type = '';
        fileInput.type = 'file';
      }
    }

    fileInput.addEventListener('change', onFileChange);
    fileClear.addEventListener('click', onClear);
  }

  window.makeFileLoad = makeFileLoad;

  if (!fileDropArea[0]) {
    return;
  }

  fileDropArea.forEach(function (item) {
    makeFileLoad(item);
  });
})();

(function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

  var onResize = function onResize() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  };

  window.addEventListener('resize', debounce(onResize));
  var $body = document.querySelector('body');

  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  }

  function Modal(trigger, modal) {
    this.trigger = trigger;
    this.modal = modal;
    this.overlay = this.modal.querySelector('.modal__overlay');
    this.closeBtn = this.modal.querySelector('.modal__close');
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.addEventListeners();
  }

  Modal.prototype.open = function () {
    this.modal.classList.add('js-show');
    $body.classList.add('js__body-no-scroll');
  };

  Modal.prototype.close = function () {
    this.modal.classList.remove('js-show');
    $body.classList.remove('js__body-no-scroll');
  };

  Modal.prototype.onOverlayClick = function (e) {
    if (e.target === this.overlay) {
      this.close();
    }
  };

  Modal.prototype.onCloseClick = function () {
    this.close();
  };

  Modal.prototype.onTriggerClick = function () {
    this.open();
  };

  Modal.prototype.addEventListeners = function () {
    this.overlay.addEventListener('click', this.onOverlayClick);
    this.closeBtn.addEventListener('click', this.onCloseClick);
    this.trigger.addEventListener('click', this.onTriggerClick);
  };

  window.Modal = Modal;
})();

(function () {
  var inputs = document.querySelectorAll('.input-phone');

  if (!inputs[0]) {
    return;
  }

  var im = new Inputmask("+7(999) 999-99-99");
  inputs.forEach(function (item) {
    im.mask(item);
  });
})();

(function () {
  var items = document.querySelectorAll('.search');
  var close = document.querySelectorAll('.search + .search-close');
  items.forEach(function (item) {
    item.addEventListener('focus', function () {
      item.parentNode.parentNode.classList.add('js-focus');
    });
  });
  items.forEach(function (item) {
    item.addEventListener('blur', function () {
      if (item.value.split(' ').join('') === '') {
        item.value = '';
      }

      if (item.value !== '' && !item.classList.contains('js-inputed')) {
        item.classList.add('js-inputed');
      }

      if (item.value === '' && item.classList.contains('js-inputed')) {
        item.classList.remove('js-inputed');
      }
    });
  });
  close.forEach(function (item) {
    item.addEventListener('click', function () {
      var search = item.previousElementSibling;
      search.value = '';

      if (search.classList.contains('js-inputed')) {
        search.classList.remove('js-inputed');
      }
    });
  });
})();

(function () {
  $(window).on('load', function () {
    var swiper = new Swiper('.device-actions__slider-container', {
      freeMode: true,
      slidesPerView: 'auto'
    });
  });
})();

(function () {
  var form = document.querySelector('.cloud-status__installation-form');

  if (!form) {
    return;
  }

  var company = form.querySelector('.cloud-status__installation-company input');
  var fileInputBlock = form.querySelectorAll('.cloud-status__installation-file');
  var fileInput = form.querySelector('.input-file__input');
  var fileClear = form.querySelector('.file-load__clear');
  var sendBtn = form.querySelector('.cloud-status__installation-form-send');

  var isFormFilled = function isFormFilled() {
    var filled = true;

    if (fileInput.value === '' || company.value === '') {
      filled = false;
    } else {
      filled = true;
    }

    return filled;
  };

  var checkInputs = function checkInputs() {
    if (isFormFilled()) {
      sendBtn.hasAttribute('disabled') && sendBtn.removeAttribute('disabled');
    }

    if (!isFormFilled()) {
      !sendBtn.hasAttribute('disabled') && sendBtn.setAttribute('disabled', '');
    }
  };

  var onFileClear = function onFileClear() {
    if (!sendBtn.hasAttribute('disabled')) {
      sendBtn.setAttribute('disabled', '');
    }
  };

  window.onInstallationFileDrop = function () {
    checkInputs();
  };

  fileInput.addEventListener('change', window.onInstallationFileDrop);
  fileClear.addEventListener('click', onFileClear);
  company.addEventListener('input', checkInputs);
})();

(function () {
  var triggers = document.querySelectorAll('[data-trigger]');
  triggers.forEach(function (item) {
    var name = item.getAttribute('data-trigger');
    var modal = document.querySelector('[data-modal=' + name + ']');

    if (modal) {
      new Modal(item, modal);
    }
  });
})();

(function () {
  var contractBtn = document.querySelector('.contract-modal-trigger');
  var modalContract = document.querySelector('.contract-modal');
  $('.contract-modal__toggle-btn').on('click', function () {
    $(this).next().slideToggle();
    $(this).children('.info-block__toggle-icon').toggleClass('opened');
  });

  if (!contractBtn || !modalContract) {
    return;
  }

  var modal = new Modal(contractBtn, modalContract);
})();

(function () {
  var $modalBtn = document.querySelectorAll('.device-actions__item-link--freez');
  var $modal = document.getElementById('freez-modal');

  if (!$modalBtn[0] || !$modal) {
    return;
  }

  $modalBtn.forEach(function (item) {
    new Modal(item, $modal);
  });
})();

(function () {
  $(window).on('load', function () {
    var swiper = new Swiper('.menu-pa__container', {
      freeMode: true,
      slidesPerView: 'auto',
      breakpoints: {
        1280: {
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: false
        }
      }
    });
  });
})();

(function () {
  var $modalBtn = document.querySelector('.my-comfort-modal-trigger');
  var $modal = document.getElementById('my-comfort-modal');

  if (!$modalBtn || !$modal) {
    return;
  }

  var modal = new Modal($modalBtn, $modal);
})();

(function () {
  var $modalBtn = document.querySelector('.my-comfort-plus-modal-trigger');
  var $modal = document.getElementById('my-comfort-plus-modal');

  if (!$modalBtn || !$modal) {
    return;
  }

  var modal = new Modal($modalBtn, $modal);
})();

(function () {
  var $modalBtn = document.querySelector('.my-comfort-premium-modal-trigger');
  var $modal = document.getElementById('my-comfort-premium-modal');

  if (!$modalBtn || !$modal) {
    return;
  }

  var modal = new Modal($modalBtn, $modal);
})();

(function () {
  var $modalBtn = document.querySelectorAll('.device-actions__item-link--delete');
  var $modal = document.getElementById('not-use-modal');
  var $body = document.querySelector('body');

  if (!$modalBtn[0] || !$modal) {
    return;
  }

  var noBtn = document.querySelector('.not-use-modal__btn--no');
  $modalBtn.forEach(function (item) {
    new Modal(item, $modal);
  });

  var onNoBtnClick = function onNoBtnClick() {
    $modal.classList.remove('js-show');
    $body.classList.remove('js__body-no-scroll');
  };

  noBtn.addEventListener('click', onNoBtnClick);
})();

(function () {
  var uploadFiles = document.querySelector('.cloud-status__card--passport');

  if (!uploadFiles) {
    return;
  }

  var file1 = uploadFiles.querySelector('input[name="passport-photo"]');
  var file2 = uploadFiles.querySelector('input[name="person-with-passport-photo"]');
  var clearFile = uploadFiles.querySelectorAll('.file-load__clear');
  var sendBtn1 = uploadFiles.querySelector('.cloud-status__card-btn--desktop');
  var sendBtn2 = uploadFiles.querySelector('.cloud-status__card-btn--mobile');

  var isFormFilled = function isFormFilled() {
    var filled = true;

    if (file1.value === '' || file2.value === '') {
      filled = false;
    }

    return filled;
  };

  var checkInputs = function checkInputs() {
    if (isFormFilled()) {
      sendBtn1.hasAttribute('disabled') && sendBtn1.removeAttribute('disabled');
      sendBtn2.hasAttribute('disabled') && sendBtn2.removeAttribute('disabled');
    }

    if (!isFormFilled()) {
      !sendBtn1.hasAttribute('disabled') && sendBtn1.setAttribute('disabled', '');
      !sendBtn2.hasAttribute('disabled') && sendBtn2.setAttribute('disabled', '');
    }
  };

  var onFileClear = function onFileClear() {
    if (!sendBtn1.hasAttribute('disabled')) {
      sendBtn1.setAttribute('disabled', '');
    }

    if (!sendBtn2.hasAttribute('disabled')) {
      sendBtn2.setAttribute('disabled', '');
    }
  };

  window.onPassportFileDrop = function () {
    checkInputs();
  };

  file1.addEventListener('change', window.onPassportFileDrop);
  file2.addEventListener('change', window.onPassportFileDrop);
  clearFile.forEach(function (item) {
    item.addEventListener('click', onFileClear);
  });
})();

(function () {
  $('.first-payment__devices-btn').on('click', function () {
    $(this).next().slideToggle();
    $(this).children('.first-payment__device-toggle-icon').toggleClass('opened');
  });
})();

(function () {
  var subscriptionBtn = document.querySelector('.subscription-modal-trigger');
  var modalSubscription = document.querySelector('.subscription-modal');
  $('.subscription-modal__toggle-item-btn').on('click', function () {
    $(this).next().slideToggle();
    $(this).children('.info-block__toggle-icon').toggleClass('opened');
  });

  if (!subscriptionBtn || !modalSubscription) {
    return;
  }

  var modal = new Modal(subscriptionBtn, modalSubscription);
})();