import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWandShine = (props: IIcon) => {

  return (
    <Icon
      name='WandShine'

      short_name='WandShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331-651 211-771l57-57 120 120-57 57Zm149-95v-170h80v170h-80Zm291 535L651-331l57-57 120 120-57 57Zm-63-440-57-57 120-120 57 57-120 120Zm38 171v-80h170v80H746ZM233-63 63-233l392-392q35-35 85-35t85 35q35 35 35 85t-35 85L233-63Zm251-364-14.5-14-14.5-14-14-14-14-14 28 28 29 28ZM233-176l251-251-57-56-250 250 56 57Z"/>
    </Icon>
  );
};

IconMaterialWandShine.displayName = 'OnesyIconMaterialWandShine';

export default IconMaterialWandShine;
