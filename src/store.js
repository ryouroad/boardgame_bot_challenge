import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: {
      '1': {
        id: "1",
        title: 'GPT技術を核とするミープルボット：ボードゲームAIの革命',
        imageUrl: require('@/assets/MeepleBotGPTCore.webp'), // 記事のメイン画像
        content: `
          <p>ミープルボットは、GPT技術をメインロジックとして採用し、GPTs上で動作することで、ボードゲームAIの開発において前例のない進化を遂げています。この先進的なAIは、深層学習と自然言語処理の能力を組み合わせることで、ボードゲームの戦略とルールを理解し、人間のプレイヤーに対して未知の挑戦を提供することが可能になりました。</p>
          <p>ミープルボットがGPT技術を使用することの最大の利点の一つは、複雑な戦略ゲームのダイナミクスをリアルタイムで解析し、瞬時に適応する能力です。このAIは、ゲームの進行に応じて数千もの異なるシナリオをシミュレーションし、最適な戦略を導き出すことができます。</p>
          <img src="${require('@/assets/MeepleBotStrategy.webp')}" alt="ミープルボットの戦略分析">
          <p>さらに、ミープルボットはGPTsの強力な自然言語処理機能を利用して、プレイヤーとの対話を通じてゲームの指示やフィードバックを提供することができます。これにより、プレイヤーはゲーム戦略の理解を深め、スキルを向上させることが可能になります。</p>
          <p>ミープルボットの開発と導入は、ボードゲーム業界においてAIの役割を再定義し、ゲームデザインとプレイヤー体験の未来を形作っています。GPT技術を核とするこのAIの進化は、ボードゲームだけでなく、教育やエンターテインメントの分野における人間とAIのインタラクションにおいても新たな可能性を開いています。</p>
        `,
        tags: ['AI×ボードゲーム（全記事表示）', 'GPT', '自然言語処理', ] // タグ情報を追加
      },
      '2': {
        id: "2",
        title: 'ボードゲームとAIの画期的な研究事例',
        imageUrl: require('@/assets/innovative-AI-research.webp'), // 記事のメイン画像
        tags: ['AI×ボードゲーム（全記事表示）'] ,
        content: `
          <h2>DeepMindのAlphaGo</h2>
          <p>GoogleのDeepMindが開発したAI、AlphaGoは、囲碁の世界チャンピオンである李世乭九段を破りました。AlphaGoは深層学習とモンテカルロ木探索を組み合わせたアルゴリズムを使用しています。これは、ボードゲームのAI研究における重要な進歩であり、AIが人間の直感と戦略を超えることができることを示しています。</p>
          <img src="${require('@/assets/AlphaGo.webp')}" alt="AlphaGoの勝利">
      
          <h2>IBMのDeep Blue</h2>
          <p>1997年、IBMのDeep Blueはチェスの世界チャンピオンであるガリー・カスパロフを破りました。Deep Blueは専門的なハードウェアと高度に最適化されたアルゴリズムを使用しており、その時点で最も強力なチェスプレーヤーとなりました。</p>
          <img src="${require('@/assets/DeepBlue.webp')}" alt="Deep Blueの勝利">
      
          <h2>OpenAIのDota 2 AI</h2>
          <p>OpenAI Fiveは、人間のプロチームと競争できるレベルのDota 2のAIを開発しました。Dota 2は非常に複雑なマルチプレイヤーオンラインバトルアリーナゲームであり、その成功はAIが複雑なタスクを処理できることを示しています。</p>
          <img src="${require('@/assets/Dota2.webp')}" alt="OpenAI Fiveの試合">
      
          <p>これらの事例は、AIがボードゲームの戦略と直感を学び、人間のプレーヤーを超えることができることを示しています。これらのAIは、ゲームのルールを理解し、複数の手を前もって計画し、それぞれの手の結果を予測する能力を持っています。これらの能力は、ボードゲームだけでなく、他の多くの問題解決の状況でも適用可能です。</p>
        `,
      },
      '3': {
        id: "3",
        title: 'ボドゲAIの革新：モンテカルロツリーサーチと強化学習',
        imageUrl: require('@/assets/MCTS-example.webp'), // 記事のメイン画像
        tags: ['AI×ボードゲーム（全記事表示）'] ,
        content: `
          <p>モンテカルロツリーサーチ (MCTS) と強化学習は、AIがボードゲームの複雑な局面をどう攻略するかの鍵を握っています。これらの技術により、AIはランダムな手を試しながら最適な戦略を導き出す能力を持ちます。</p>
          <p>特に囲碁や将棋のようなゲームでは、これらの技術の組み合わせによって、人間のプレイヤーさえも予期せぬ戦略を編み出しています。AIの学習プロセスは、複数の局面をシミュレートし、それぞれの結果を評価することから始まります。この評価は、勝利の可能性が高い手や、長期的に見て有利なポジションを見極めるのに役立ちます。</p>
          <p>モンテカルロツリーサーチは、特に不確定要素が多く、可能な手の数が膨大なゲームでその真価を発揮します。ランダムな手法に基づくこのアプローチは、従来のアルゴリズムでは計算しきれないほどの複雑なゲームでも、最適な手を見つけ出すことが可能です。</p>
          <p>強化学習は、エージェントが「試行錯誤」を通じて学習を進めるプロセスです。成功には報酬が与えられ、エージェントは報酬を最大化する行動を学びます。これにより、AIは未知のゲームや状況でも自ら最適な戦略を編み出すことができるようになります。</p>
          <p>これらの技術の組み合わせによって、AIはただのプログラムを超えた「学習するエンティティ」となり、ボードゲームのみならず、リアルタイムで戦略を練る必要がある様々な分野での応用が期待されています。将来的には、これらのAI技術が、経済や医療、物流など、さらに幅広い分野での意思決定を支援する日も来るかもしれません。</p>
        `,
      },          
    }
  },
  getters: {
    getArticleById: (state) => (id) => {
      return state.articles[id] || null;
    }
  }
});

