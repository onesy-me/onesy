import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraft = (props: IIcon) => {

  return (
    <Icon
      name='Draft'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
};

IconMaterialDraft.displayName = 'OnesyIconMaterialDraft';

export default IconMaterialDraft;
