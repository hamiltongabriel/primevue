import { ItemType, toItem } from '..';

export const form: ItemType[] = toItem([
    'AutoComplete',
    'Calendar',
    'CascadeSelect',
    'Checkbox',
    'Chips',
    'ColorPicker',
    'DatePicker',
    'Dropdown',
    'Editor',
    'FloatLabel',
    'IconField',
    'InputChips',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputOtp',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MultiSelect',
    'Password',
    'RadioButton',
    'Rating',
    'Select',
    'SelectButton',
    'Slider',
    'Textarea',
    'ToggleButton',
    'ToggleSwitch',
    'TreeSelect'
]);

export const button: ItemType[] = toItem(['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton']);

export const data: ItemType[] = toItem(['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller']);

export const panel: ItemType[] = toItem([
    'Accordion',
    'AccordionPanel',
    'AccordionHeader',
    'AccordionContent',
    'AccordionTab',
    'Card',
    'DeferredContent',
    'Divider',
    'Fieldset',
    'Panel',
    'ScrollPanel',
    'Splitter',
    'SplitterPanel',
    'Stepper',
    'StepperPanel',
    'TabView',
    'Tabs',
    'TabList',
    'Tab',
    'TabPanels',
    'TabPanel',
    'Toolbar'
]);

export const overlay: ItemType[] = toItem([
    { name: 'ConfirmDialog', use: { as: 'ConfirmationService' } },
    { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } },
    'Dialog',
    'Drawer',
    { name: 'DynamicDialog', use: { as: 'DialogService' } },
    'OverlayPanel',
    'Popover',
    'Sidebar'
]);

export const file: ItemType[] = toItem(['FileUpload']);

export const menu: ItemType[] = toItem(['Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TabMenu', 'TieredMenu']);

export const chart: ItemType[] = toItem(['Chart']);

export const messages: ItemType[] = toItem(['Message', 'InlineMessage', { name: 'Toast', use: { as: 'ToastService' } }]);

export const media: ItemType[] = toItem(['Carousel', 'Galleria', 'Image']);

export const misc: ItemType[] = toItem(['Avatar', 'AvatarGroup', 'Badge', 'BlockUI', 'Chip', 'Inplace', 'MeterGroup', 'OverlayBadge', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag', 'Terminal']);

// All PrimeVue Components
export const components: ItemType[] = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...chart, ...messages, ...media, ...misc];
