<script lang="ts">
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div
		class="mb-10 flex items-center justify-center gap-4 rounded-xl bg-[#ffcc00] p-4 text-7xl font-semibold text-white"
		style="font-family: ‘McHelvetica’;"
	>
		<Icon icon="file-icons:svelte" />
		SvDonald's
	</div>
	<ButtonGroup>
		<Button class="aspect-square p-6" color="primary" disabled>
			<Icon class="text-6xl" icon="fa6-solid:cash-register" />
		</Button>
		<Button class="aspect-square p-6" color="primary" disabled>
			<Icon class="text-6xl" icon="fa6-solid:utensils" />
		</Button>
		<Button class="aspect-square p-6" color="primary" disabled>
			<Icon class="text-6xl" icon="mdi:cook" />
		</Button>
	</ButtonGroup>
</div>
