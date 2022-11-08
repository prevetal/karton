$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 20,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onTranslate: (event) => {
			$(event.target).trigger('stop.owl.autoplay')

			const parent = $(event.target).closest('.main_slider')
			const currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			parent.find('.thumbs button').removeClass('active')
			parent.find('.thumbs button:eq(' + currentIndex + ')').addClass('active')
		},
		onTranslated: (event) => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})

	$('.main_slider .thumbs button').click(function (e) {
		e.preventDefault()

		const parent = $(this).closest('.main_slider')

		parent.find('.slider').trigger('to.owl', $(this).data('slide-index'))
	})


	// Товары
	$('.products .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 2,
				margin: 8
			},
			768: {
				items: 3,
				margin: 10
			},
			1024: {
				items: 4,
				margin: 8
			},
			1220: {
				items: 5,
				margin: 15
			}
		},
		onInitialized: (event) => {
			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		},
		onResized: (event) => {
			$(event.target).find('.product').height('auto')

			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		}
	})

	$('.products .views_slider').owlCarousel({
		loop: false,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 2,
				margin: 8
			},
			768: {
				items: 3,
				margin: 10
			},
			1024: {
				items: 4,
				margin: 8
			},
			1220: {
				items: 5,
				margin: 15
			}
		},
		onInitialized: (event) => {
			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		},
		onResized: (event) => {
			$(event.target).find('.product').height('auto')

			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		}
	})

	$('.products .views_mini_slider').owlCarousel({
		loop: false,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 2,
				margin: 8
			},
			768: {
				items: 3,
				margin: 10
			},
			1024: {
				items: 3,
				margin: 8
			},
			1220: {
				items: 4,
				margin: 15
			}
		},
		onInitialized: (event) => {
			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		},
		onResized: (event) => {
			$(event.target).find('.product').height('auto')

			setTimeout(() => { setHeight($(event.target).find('.product')) }, 100)
		}
	})


	// Новости
	$('.articles .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 2,
				margin: 8
			},
			768: {
				items: 3,
				margin: 10
			},
			1024: {
				items: 4,
				margin: 8
			},
			1220: {
				items: 5,
				margin: 15
			}
		},
		onInitialized: (event) => {
			setTimeout(() => { setHeight($(event.target).find('.article')) }, 100)
		},
		onResized: (event) => {
			$(event.target).find('.article').height('auto')

			setTimeout(() => { setHeight($(event.target).find('.article')) }, 100)
		}
	})


	// Примеры готовой продукции
	$('.products_examples .slider').owlCarousel({
		loop: false,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: ['<span></span>', '<span></span>'],
		responsive: {
			0: {
				items: 2,
				margin: 8
			},
			768: {
				items: 3,
				margin: 10
			},
			1024: {
				items: 4,
				margin: 8
			},
			1220: {
				items: 5,
				margin: 15
			}
		},
		onInitialized: (event) => {
			setTimeout(() => { setHeight($(event.target).find('.item')) }, 100)
		},
		onResized: (event) => {
			$(event.target).find('.item').height('auto')

			setTimeout(() => { setHeight($(event.target).find('.item')) }, 100)
		}
	})


	// Боковая колонка
	$('aside .cats .main_cat .arr').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.main_cat')

		parent.hasClass('active')
			? parent.removeClass('active').next().slideUp(300)
			: parent.addClass('active').next().slideDown(300)
	})


	$('aside .mob_cats_btn, aside .mob_filter_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Категория - список подкатегорий
	$('.sub_categories .spoler_btn').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.sub_categories')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$parent.find('.hide').fadeOut(300)
		} else {
			$(this).addClass('active')
			$parent.find('.hide').fadeIn(200)
		}
	})


	// Удаление товара с корзины
	$('.cart_info table td.delete button').click(function (e) {
		e.preventDefault()

		$(this).closest('tr').remove()
		updateCartPrice()

		if (!$('.cart_info table tbody tr').length) {
			// В корзине не осталось товаров
		}
	})


	// Оформление заказа
	$('.checkout .form .type label').click(function () {
		let typeContent = $(this).data('content')

		$('.checkout .form .type_content').hide()
		$('.checkout .form ' + typeContent).fadeIn(300)
	})


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false,
			afterShow: (instance, current) => {
				setTimeout(() => { $.fancybox.close() }, 2000)
			}
		})
	})


	// Фильтр
	$('.filter .name').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 1500,
		from: 100,
		to: 1000,
		step: 10,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val()),
			to: parseFloat($('.filter .price_range input.to').val())
		})
	})


	$lengthRange = $('.filter #length_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 1500,
		from: 100,
		to: 1000,
		step: 10,
		onChange: data => {
			$('.filter .length_range input.from').val(data.from)
			$('.filter .length_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .length_range input.from').val(data.from)
			$('.filter .length_range input.to').val(data.to)
		}
	}).data("ionRangeSlider")

	$('.filter .length_range .input').keyup(function () {
		$lengthRange.update({
			from: parseFloat($('.filter .length_range input.from').val()),
			to: parseFloat($('.filter .length_range input.to').val())
		})
	})


	$widthRange = $('.filter #width_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 1500,
		from: 100,
		to: 1000,
		step: 10,
		onChange: data => {
			$('.filter .width_range input.from').val(data.from)
			$('.filter .width_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .width_range input.from').val(data.from)
			$('.filter .width_range input.to').val(data.to)
		}
	}).data("ionRangeSlider")

	$('.filter .width_range .input').keyup(function () {
		$widthRange.update({
			from: parseFloat($('.filter .width_range input.from').val()),
			to: parseFloat($('.filter .width_range input.to').val())
		})
	})


	$('.filter .reset_btn').click(function () {
		$('.filter input').removeAttr('checked')

		$priceRange.reset()
		$lengthRange.reset()
		$widthRange.reset()
	})


	// Выбор файла
	$('body').on('change', '.form input[type=file]', function (e) {
		$(this).closest('.file').find('label .path').text($(this).val())
	})
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight && $(window).width() > 1023
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > headerHeight && $(window).width() > 1023
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight && $(window).width() > 1023
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})