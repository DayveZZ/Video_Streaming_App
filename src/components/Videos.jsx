import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          src={videoSrc}
          style={{ width: '100%' }}
          controls
          controlsList="nodownload"
        ></video>
        <VStack
          alignItems={'flex-start'}
          p={'8'}
          w={'full'}
          overflow={'auto'}
          textAlign={'justify'}
        >
          <Heading>Sample Video</Heading>
          {/* <Text>
            This is a sample video for testing and demo. This is called
            description. <br />
            <br />
            <b>Somthing IDK =</b> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Animi incidunt hic dolorem iste culpa ipsam
            tempora sit, saepe, quos cupiditate laboriosam ratione maiores
            suscipit tenetur quidem. Quo, labore obcaecati sapiente inventore
            consequuntur eaque suscipit dolores harum ducimus expedita
            distinctio quibusdam! Eveniet dolore repellat expedita enim aperiam
            sapiente quae architecto, quisquam ratione, accusantium id odio
            minima vero doloremque voluptatibus sint, repellendus debitis iste
            quis rem pariatur. Harum voluptas architecto obcaecati neque
            voluptate quas necessitatibus molestiae eaque facere tempora
            veritatis fugit similique, quaerat expedita suscipit itaque incidunt
            earum blanditiis cumque labore eveniet autem ex! Obcaecati libero
            doloremque ad suscipit architecto illo quis. In quis eveniet fugiat
            vero voluptates, aliquid quasi mollitia rem? Earum, facilis velit
            omnis ipsa ullam id atque harum quae, illo rem eos, deleniti quis.
            Iusto voluptatem illo dicta eius ducimus harum nihil illum? Iste,
            rerum qui? Voluptatem eius dignissimos expedita magni aperiam
            voluptatibus repellendus facilis eligendi perspiciatis pariatur
            nostrum atque molestiae illo, nemo numquam ad maiores deleniti
            itaque. In optio dolor reprehenderit beatae ipsam maxime, aliquid
            excepturi minima velit neque debitis porro, earum alias tempore
            animi, nam vitae quibusdam ad repellat quaerat obcaecati repudiandae
            quis. Officia harum hic, similique nisi quod asperiores ea illo eius
            aspernatur pariatur fugiat perferendis optio rerum cumque saepe.
            Aperiam saepe tenetur sapiente perspiciatis amet. Eum cumque
            mollitia ipsum assumenda repellat aliquam deleniti? Eaque odio
            deleniti consectetur, sint, at aut ducimus modi quisquam ex minima
            impedit eos architecto omnis, quaerat ipsam repudiandae maxime
            illum! Repellendus quam aut tempore officia, praesentium
            exercitationem ipsa suscipit sapiente facilis magni vel atque magnam
            alias iste nostrum, sequi excepturi dolore tenetur aspernatur.
            Deleniti neque cum, assumenda cupiditate, ex quo quas illum expedita
            exercitationem voluptates suscipit delectus, dicta iure. Ex quaerat
            nulla odit omnis, mollitia quidem non? Tenetur ab dolores sunt
            ratione eaque nisi eligendi autem vero perferendis voluptate officia
            aspernatur totam corporis eius corrupti voluptatibus placeat quas
            nam eveniet voluptates soluta sapiente aliquid, nostrum doloremque.
            Quaerat quibusdam odio amet, nam tempore soluta ullam eos dolorem
            rerum. Culpa ipsam repellat porro molestiae! Corporis, asperiores.
            Sequi ipsam ratione veniam voluptates excepturi? Praesentium at illo
            cupiditate ab eos libero, tempora placeat velit in dignissimos ex?
            Accusantium ipsam tempore dolorum magnam praesentium exercitationem
            tenetur optio, deserunt nisi, dolor ex. Nesciunt, soluta harum
            quisquam qui ab ipsum officia itaque deleniti cumque ea placeat
            error, dolore corporis architecto reiciendis tempora magni debitis
            culpa! Ipsa iusto sit eligendi quasi? Doloribus exercitationem nulla
            nam quos et animi veniam.
          </Text> */}
          <Text>
            This is a sample video for testing and demo. This is called
            description. <br />
            <br />
            <b>Somthing IK =</b> Hello everyone, my name is Dayve, the only
            programmer in the world with 69 pack abs and you are watching
            Dayve-Gaming... KheKheKhe :)
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'red'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
