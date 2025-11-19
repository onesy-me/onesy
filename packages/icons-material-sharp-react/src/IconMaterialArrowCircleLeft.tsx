import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleLeft = (props: IIcon) => {

  return (
    <Icon
      name='ArrowCircleLeft'

      short_name='ArrowCircleLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
};

IconMaterialArrowCircleLeft.displayName = 'OnesyIconMaterialArrowCircleLeft';

export default IconMaterialArrowCircleLeft;
