import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueuePlayNext = (props: IIcon) => {

  return (
    <Icon
      name='QueuePlayNext'

      short_name='QueuePlayNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-60-60-60 120-120-120-120 60-60 180 180L780-60Zm-460-60v-80H80v-640h800v360h-80v-280H160v480h520v80h-80v80H320Zm120-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm-280 80v-480 480Z"/>
    </Icon>
  );
};

IconMaterialQueuePlayNext.displayName = 'OnesyIconMaterialQueuePlayNext';

export default IconMaterialQueuePlayNext;
