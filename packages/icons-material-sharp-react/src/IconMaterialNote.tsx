import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNote = (props: IIcon) => {

  return (
    <Icon
      name='Note'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
};

IconMaterialNote.displayName = 'OnesyIconMaterialNote';

export default IconMaterialNote;
